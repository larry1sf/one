export default function CardsT({ nmUse, clsName, url }) {
    return (
        <>
            <a className={`${clsName} ${nmUse}`}
                target="_blank"
                href={url}
            >

                <div className={`bg-interno ${nmUse}`}>
                    <p> {nmUse} </p>
                </div>
            </a >
        </>
    );

}
