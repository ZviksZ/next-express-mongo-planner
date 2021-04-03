import Head          from 'next/head'
import styles        from '../styles/Home.module.css'
import { useEffect } from "react";
import { AppAlert }  from "@components/common/AppAlert/AppAlert";
import { Navbar }    from "@components/common/Navbar/Navbar";
import { LoginForm } from "@components/forms/LoginForm/LoginForm";

export default function Home() {

  return (
    <div className={styles.container}>
      <Navbar/>
      <AppAlert/>

      <LoginForm/>


    </div>
  )
}
