import { User } from '../models/user.model';
import { MyError } from '../models/my-error.model';

class UserServices {

    static async signUp(name: String, email: String, plainPassword: String ) {
        if (!name) throw new MyError('NAME_MUST_BE_PROVIDED', 404);
        if (!email) throw new MyError('EMAIL_MUST_BE_PROVIDED', 404);
        if (!plainPassword) throw new MyError('PASSWORD_MUST_BE_PROVIDED', 404);
        
    }

}