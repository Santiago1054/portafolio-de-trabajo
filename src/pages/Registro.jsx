import { useForm } from 'react-hook-form'
import { useAuth } from '../context/AuthContext'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

function RegisterPage() {

    const {
        register,
        handleSubmit,
        formState: { errors } } = useForm()

    const { singup, isAuthenticated, errors: registerErrors } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if (isAuthenticated) navigate("/tasks")
    }, [isAuthenticated])

    const onSubmit = handleSubmit(async (values) => {
        singup(values)

    })

    return (
        <div className='flex h-[calc(100vh-100px)] items-center justify-center'>
            <div className='bg-white w-full max-w-2xl p-10 rounded-md  outline outline-2 outline-blue-500 shadow-2xl shadow-sky-500'>
                {
                    registerErrors.map((error, i) => (
                        <div className='bg-red-500 p-2 text-white' key={i}>
                            {error}
                        </div>
                    ))
                }
                <h1 className='text-3xl font-bold text-form'>Contact</h1>
                <br />
                <div class="flex mt-4 justify-center items-end space-x-2">
                    <svg class="w-10 h-10 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17 6h-2V5h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2h-.541A5.965 5.965 0 0 1 14 10v4a1 1 0 1 1-2 0v-4c0-2.206-1.794-4-4-4-.075 0-.148.012-.22.028C7.686 6.022 7.596 6 7.5 6A4.505 4.505 0 0 0 3 10.5V16a1 1 0 0 0 1 1h7v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3h5a1 1 0 0 0 1-1v-6c0-2.206-1.794-4-4-4Zm-9 8.5H7a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2Z" />
                    </svg>
                    <br />
                    <h1 class="font-sans text-form text-2xl font-medium">ramirezcastellanossantiago@gmail.com</h1>
                </div>
                <br />
                <br />
                <div class="flex mt-4 justify-center items-end space-x-10">


                    <a href="https://github.com/Santiago1054" class="text-form hover:text-blue-500 duration-200 ms-5" target="_blank">
                        <svg class="w-16 h-16" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd" />
                        </svg>
                        <span class="sr-only">GitHub account</span>
                    </a>
                    <a href="https://www.linkedin.com/in/santiago-ramirez-castellanos-bb919821a/" class="text-form hover:text-blue-500 duration-200 ms-5" target="_blank">
                        <svg class="w-16 h-16" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clip-rule="evenodd" />
                            <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                        </svg>

                        <span class="sr-only">Dribbble account</span>
                    </a>
                </div>

                <br />


            </div>
        </div>
    )
}
export default RegisterPage