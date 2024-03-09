interface Text{
    title:string,
}
export default function Title({title}:Text){
    return(
        <>
         <h1 className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent text-white bg-opacity-50 p-2">
         {title}
        </h1>
        </>
    )
}