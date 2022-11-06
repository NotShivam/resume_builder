import React from "react";
import styles from './Footer.module.css'
import rb_logo from '../../assets/rb-logo-footer.png'


function Footer() {
    return (
        <div id="footer" className={styles.main_footer}>
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.col}>
                        <img src={rb_logo} alt="Resume" className={styles.img} />
                        <p className={styles.copyright}>
                            <span>&copy; {new Date().getFullYear()} ResumeBuilder.com.</span>
                            <br />
                            <span> All rights reserved.</span>
                            <br /><br />
                        </p>
                    </div>
                    <div className={styles.col}>
                        <h3 className={styles.col_heading}>For Job Seekers</h3>
                        <a href="body" className={styles.list_elements}>Build a Resume</a>
                        <a href="https://www.resume.com/sample" className={styles.list_elements}>Resume Samples</a>
                        <a href="https://angel.co/" className={styles.list_elements}>Job Search Portal</a>
                    </div>
                    <div className={styles.col}>
                        <h3 className={styles.col_heading}>Know Us</h3>
                        <a href="footer" className={styles.list_elements}>About Us</a>
                        <a href="footer" className={styles.list_elements}>Contact Us</a>
                        <a href="footer" className={styles.list_elements}>Privacy Policy</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;