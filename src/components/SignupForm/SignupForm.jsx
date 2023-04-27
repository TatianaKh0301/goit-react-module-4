import useLocalStorage from 'hooks/useLocalStorage';
import styles from './SignupForm.module.css';

export default function SingupForm() {
    const [email, setEmail] = useLocalStorage('email', '');
    const [password, setPassword] = useLocalStorage('password', '');
    // const [email, setEmail] = useState(() => {
    //     return JSON.parse(window.localStorage.getItem('email')) ?? '';
    // });
    // const [password, setPassword] = useState(() => {
    //     return JSON.parse(window.localStorage.getItem('password')) ?? '';
    // });
    // console.log(setEmail);

    const handleChange = event => {
        const { name, value } = event.target;
        switch(name) {
            case 'email':
                setEmail(value);
                break;
            
            case 'password':
                setPassword(value);
                break;

            default:
                return;
        }
    }

    // useEffect(() => {
    //     window.localStorage.setItem('email', JSON.stringify(email));
    // }, [email]);

    // useEffect(() => {
    //     window.localStorage.setItem('password', JSON.stringify(password));
    // }, [password]);

    return(
        <form className={styles.form} autoComplete="off">
            <label className={styles.label}>
                <span>Почта</span>
                <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={email}
                />
            </label>

            <label className={styles.label}>                     
                <span>Пароль</span>
                    <input
                        type="password"
                        name="password"
                        onChange={handleChange}
                        value={password}
                    />
                 </label>
            <button type="submit">Зарегистрироваться</button>
        </form>
    );
}




// export default class SignupForm extends Component {
//     state = {
//         email:'',
//         password: '',
//     };

//     handleChange = evt => {
//         const { name, value } = evt.target;
//         this.setState({[name]: value});
//     };

//     render() {
//         return(
//             <form className={styles.form} autoComplete="off">
//                 <label className={styles.label}>
//                     <span>Почта</span>
//                     <input
//                         type="email"
//                         name="email"
//                         onChange={this.handleChange}
//                         value={this.state.email}
//                     />
//                 </label>
//                 <label className={styles.label}>
//                     <span>Пароль</span>
//                     <input
//                         type="password"
//                         name="password"
//                         onChange={this.handleChange}
//                         value={this.state.password}
//                     />
//                 </label>

//                 <button type="submit">Зарегистрироваться</button>
//             </form>
//         );
//     }
// }