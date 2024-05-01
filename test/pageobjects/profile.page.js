import { $ } from '@wdio/globals'

class ProfilePage {
    async profileName(name){
        return await $(`//android.widget.TextView[@text="${name}"]`) //xpath
    }

}

export default new ProfilePage();
