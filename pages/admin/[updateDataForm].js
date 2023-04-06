import { useForm } from 'react-hook-form';

const UpdateDataForm = () => {
    //react-hook-form
    const { register, handleSubmit } = useForm({});

    const onSubmit = data => console.log(data);

    const inputStyle =
        'w-full p-1 border-none bg-primary-100 dark:bg-primary-200 focus:outline-none focus:shadow-inner focus:shadow-gray-300 xl:py-2';

    return (
        <div className='px-10 mt-10 space-y-7'>
            <h2>Update Projects Data</h2>
            <form onSubmit={handleSubmit(onSubmit)} autoComplete='off' className='flex flex-col space-y-2'>
                <input {...register('title')} autoComplete='new' placeholder='Title' className={inputStyle} />
                <input {...register('image')} placeholder='Image Link' className={inputStyle} />
                <input {...register('repository')} placeholder='Repository Address' className={inputStyle} />
                <input {...register('demo')} placeholder='Demo Address' className={inputStyle} />
                <textarea {...register('description')} rows='10' placeholder='Description' className={inputStyle} />
                <input type='submit' value='Update Data' className='py-2 bg-primary-300 text-primary-white cursor-pointer' />
            </form>
        </div>
    );
};

export default UpdateDataForm;
