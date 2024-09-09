import styles from "../styleFeatures/Features.module.css"
import { LoginBtn } from "../../shared/ui/buttons/authBtn/LoginBtn"
import { RegisterBtn } from "../../shared/ui/buttons/authBtn/RegisterBtn"
import { Heading } from "../../shared/ui/Heading"
import { useForm } from "react-hook-form"
import { InputEmail } from "../../shared/ui/inputs/InputEmail"
import { InputPass } from "../../shared/ui/inputs/InputPass"
import { useRef } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth"
import { setUser } from "./authSlice"
import { useAuth } from "../../globalHooks/use-auth"

export const FormAuth = () => {
  const navigate = useNavigate()
  const refEmail = useRef(null)
  const refPass = useRef(null)
  const { isUser } = useAuth()
  const dispatch = useDispatch()

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" })

  async function onSubmitFn(data, e) {
    const userId = e.nativeEvent.submitter.id
    const auth = getAuth()
    e.preventDefault()
    // ==============================================================
    if (userId === "Register" && isUser === false) {
      await createUserWithEmailAndPassword(auth, data.email, data.password)
        .then(({ user }) => {
          dispatch(
            setUser({
              email: user.email,
              id: user.uid,
              token: user.accessToken,
            })
          )
          navigate("/")
        })
        .catch(() => alert("Invalid user!"))
    } else if (userId === "Login") {
      await signInWithEmailAndPassword(auth, data.email, data.password)
        .then(({ user }) => {
          dispatch(
            setUser({
              email: user.email,
              id: user.uid,
              token: user.accessToken,
            })
          )
          navigate("/")
        })
        .catch(() => alert("Invalid user!"))
    }
    // ==============================================================

    reset()
  }

  return (
    <div className={styles.authPage}>
      <form onSubmit={handleSubmit(onSubmitFn)} className={styles.authForm}>
        <Heading />
        <InputEmail
          register={register}
          label="Email:"
          ref={refEmail}
          id="email"
        />
        {errors.email && (
          <div className={styles.errorMsg}>{errors.email.message}</div>
        )}

        <br />

        <InputPass
          register={register}
          label="Password:"
          ref={refPass}
          id="password"
        />
        {errors.password && (
          <div className={styles.errorMsg}>{errors.password.message}</div>
        )}

        <div className={styles.authBlockBtn}>
          <LoginBtn id="Login" type="submit" />
          <RegisterBtn id="Register" type="submit" />
        </div>
      </form>
    </div>
  )
}
