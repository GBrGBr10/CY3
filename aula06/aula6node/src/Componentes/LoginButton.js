import './LoginButton.css'

function LoginButton({label = 'enviar butão'}) {
    return(
        <div>
            <button>
                {label}
            </button>
        </div>
    )
}

export default LoginButton;