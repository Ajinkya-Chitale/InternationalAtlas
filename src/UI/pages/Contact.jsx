import { useForm } from "react-hook-form";

const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    return (
        <div className='bg-gray-900 text-gray-300 py-16'>
            <div className='flex items-center justify-center flex-col'>
                <h1 className='text-4xl mb-9'>Contact Us</h1>

                <form className='text-gray-300 min-w-80 max-w-80 m-auto' onSubmit={handleSubmit(onSubmit)}>
                    <input className={`border border-gray-500 rounded-lg py-2.5 px-2 w-full ${errors.firstName ? 'mb-2' : 'mb-5'}`} autoComplete='off' placeholder='Enter Your Name' type="text" {...register("firstName", { required: true })} />
                    {errors.firstName?.type === 'required' && <p role="alert" className='mb-4 text-[12px] text-red-500'>First name is required</p>}

                    <input className={`border border-gray-500 rounded-lg py-2.5 px-2 w-full ${errors.email ? 'mb-2' : 'mb-5'}`} autoComplete='off' placeholder='Enter Your Email' type="text" {...register("email", { required: true, pattern: emailPattern })} />

                    {errors.email && (
                        <p role="alert" className='mb-4 text-[12px] text-red-500'>
                            {errors.email.type === 'required'
                                ? 'Email Address is required'
                                : `Invalid Email format`}
                        </p>
                    )}

                    <textarea className='border border-gray-500 rounded-lg py-2.5 px-2 w-full mb-5' cols={2} rows={5} placeholder='Enter Your Message' {...register('message')} />

                    <div className='flex justify-end'>
                        <button className='border w-32 px-2 py-2.5 cursor-pointer rounded-lg hover:bg-sky-800' type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact
