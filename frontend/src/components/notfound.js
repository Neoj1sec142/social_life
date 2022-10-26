
const notfound = () => {
    return(
        <div className="container">
            <br/>
            <div className="card p-2 text-center bg-light">
                <h1 className="card-title">404! The Page You Are Looking For Was Not Found</h1>
                <p className="card-text mb-2">Please <a href='/' id="not">CLICK HERE</a> return to the homepage to navigate active sites.</p>
                <p className="card-text mb-1">If this issue keeps occuring please email our staff at EXAMPLE@GMAIL.COM.</p>
            </div>
        </div>
    )
}
export default notfound;