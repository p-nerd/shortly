function LandingIntro() {
    return (
        <div className="hero min-h-full rounded-l-xl bg-base-200">
            <div className="hero-content py-12">
                <div className="max-w-md">
                    <h1 className="text-center text-3xl font-bold ">
                        <img
                            src="/favicon.svg"
                            className="mask mask-circle mr-2 inline-block w-12"
                            alt="PNerdLy-logo"
                        />
                        PNerdLy
                    </h1>

                    <div className="mt-12 text-center">
                        <img
                            src="/intro.png"
                            alt="Intro image"
                            className="inline-block w-48"
                        ></img>
                    </div>

                    <p className="pt-5">Generate Shorten URLs</p>
                </div>
            </div>
        </div>
    );
}

export default LandingIntro;
