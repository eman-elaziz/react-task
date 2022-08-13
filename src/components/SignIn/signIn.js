import styles from './SignIn.module.css';
function SignIn (){
  
    
return(
    <section className={`${styles.login}`}>
<div className={styles.container}>
    <div className={styles.slider}>
jjjj
    </div>
    <div className={styles.loginForm}>
        <div className={styles.loginContent}>
            <div className={styles.logoContainer}>
            <img src='logo.png ' className={styles.logo}/>
    <h3 className={styles.h3}>Ui Unicorn</h3>
            </div>
            <h2 className={styles.h2}>Nice to see you again</h2>
           <form>
            <label className={styles.label}>Login</label>
            <input type="text" className={styles.formControl} placeholder="Email or phone Number"></input>
            <label className={styles.label}>Password</label>
            <input type="password" className={styles.formControl} placeholder="Enter password"></input>
           </form>

        </div>
        </div>
</div>
    </section>

)
}
export default SignIn