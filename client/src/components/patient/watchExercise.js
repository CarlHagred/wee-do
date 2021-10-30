
const WatchExercise = (url) => {
    return (
        <div className="watchingExe">
            <iframe src={url} frameborder="0" className="youtubePlayer" width="420" height="315" allowFullScreen></iframe>
        </div>
    );
}
 
export default WatchExercise;