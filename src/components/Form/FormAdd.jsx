import useLocalStorage from "hooks/useLocalStorage";

export default function FormAdd() {
    const [user, setUser] = useLocalStorage('user', '');
    const [email, setEmail] = useLocalStorage('email', '');
    const [password, setPassword] = useLocalStorage('password', '');
    
    // const [user, setUser] = useState(() => {
    //     return JSON.parse(window.localStorage.getItem('user')) ?? '';
    // });

    // const [email, setEmail] = useState(() => {
    //     return JSON.parse(window.localStorage.getItem('email')) ?? '';
    // });

    // const [password, setPassword] = useState(() => {
    //     return JSON.parse(window.localStorage.getItem('password')) ?? '';
    // });

    // const handleUserChange = event => {
    //     setUser(event.target.value);
    // };
    // const handleEmailChange = event => {
    //     setEmail(event.target.value);
    // };
    // const handlePasswordChange = event => {
    //     setPassword(event.target.value);
    // };
    const handleChange = event => {
        console.log(event.target.name);
        const { name, value } = event.target;
        switch(name) {
            case 'user': 
                setUser(value);
                break;

            case 'email': 
                setEmail(value);
                break;

            case 'password': 
                setPassword(value);
                break;

            default: return;
        }
    };

    // useEffect(() => {
    //     window.localStorage.setItem('user', JSON.stringify(user));
    // }, [user]);

    // useEffect(() => {
    //     window.localStorage.setItem('email', JSON.stringify(email));
    // }, [email]);
    // useEffect(() => {
    //     window.localStorage.setItem('password', JSON.stringify(password));
    // }, [password]);

    return(
        <form autoComplete="off">
            <label> Name 
                <input 
                    type="text" 
                    name="user" 
                    value={user} 
                    onChange={handleChange}>
                </input>
            </label>
            <label> Email
                <input 
                    type="email" 
                    name="email" 
                    value={email} 
                    onChange={handleChange}>
                </input>
            </label>
            <label>Password
                <input
                    type="password" 
                    name="password" 
                    value={password} 
                    onChange={handleChange}>
                </input>
            </label>
        </form>
    );
}