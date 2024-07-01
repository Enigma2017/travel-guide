export const HeaderBlock: React.FC = () => {
    return (
        <header className='header-block'>
            <video className='header-block__video' autoPlay loop muted>
                <source src='/img/bg-video.mp4' type="video/mp4" />
            </video>
            <div className='header-block__content'>
                <h1>Your Heading</h1>
            </div>
        </header>
    );
}
