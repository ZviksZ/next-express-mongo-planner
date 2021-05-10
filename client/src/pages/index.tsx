import styles        from '../styles/Home.module.css'
import { LoginForm } from "@components/forms/LoginForm/LoginForm";
import { Navbar }    from "@components/common/Navbar/Navbar";
import { AppAlert }  from "@components/common/AppAlert/AppAlert";

export default function Home() {

  return (
    <>
      <AppAlert/>
      <LoginForm/>
    </>
  )
}
