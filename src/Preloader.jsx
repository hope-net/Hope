
export default function Preloader({onComplete}) {
    const handleAnimationEnd = () => {
        // onComplete()
      }
    return(
        <main className="preloaderContainer">
        <div className="preloaderLogoContainer">
            <img className="preloaderLogo" src="/Hope.jpg" alt="Loading..." />
        </div>
        <div className="loaderContainer">
        <div className="loading" onAnimationEnd={handleAnimationEnd}></div>
        <img className="pen" src="/pen.png" alt="pen" />
        </div>
        </main>
    )
}