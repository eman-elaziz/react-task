import styles from './SignIn.module.css';
function SignIn (){
  
    
return(
    <section className={`${styles.login}`}>
<div className={styles.container}>
    <div className={styles.slider}>

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
            <div style={{position:'relative'}}>
                   <input type="password" className={styles.formControl} placeholder="Enter password"></input>
            <img src='show.png' className={styles.show}/></div>
         <div className={styles.forget}>
            <div>  <input type="checkbox" className={styles.checkbox} ></input>
            <label>Remember me</label></div>
          
            <a href="#" className={styles.forgetPassword}>Forget password ?</a>
         </div>
         <button type="submit" className={styles.signButton}>Sign in</button>
         <hr className={styles.line}/>
         <button type="submit" className={`${styles.googleButton} ${styles.signButton}` }>
         or sign in with google</button>
<div style={{marginTop:10,textAlign:"center"}}> <span>Dont have an account?</span> 
<a href='#' style={{textDecoration:"none",paddingLeft:10}}>Sign up now</a></div>
           </form>
<div>fgf</div>
        </div>
        
        </div>
       
</div>

    </section>

)
}
export default SignIn