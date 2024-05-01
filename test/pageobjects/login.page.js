import { $ } from '@wdio/globals'

class LoginPage {
    get email() {
       return $('id:email') //por id
    }
    get password() {
        return $('android=new UiSelector().text("Password")') //por text
     }
    get btnLogin() {
        return  $('~Login') //acessibility ID
    }

    async login(email, password){
        await this.email.setValue(email)
        await this.password.setValue(password)
        await this.btnLogin.click()
    }
}

export default new LoginPage();
