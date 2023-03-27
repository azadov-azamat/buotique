export default function Title({text}: TitleProps){
    return(
        <div className={'w-full flex justify-center items-center font-shangoB text-xl xl:text-3xl lg:text-2xl uppercase pb-2'} data-aos="fade-up">
            <p className={'flex text-primary_dark'}>{text}</p>
        </div>
    )
}

interface TitleProps{
    text: string
}