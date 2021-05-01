import styles        from '../styles/Home.module.css'
import { LoginForm } from "@components/forms/LoginForm/LoginForm";

export default function Home() {

  return (
    <div className={styles.container}>
      index page
      <LoginForm/>
    </div>
  )
}
