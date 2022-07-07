const musics = [
    "Goodbye my Love Goodbye!",
    "Rain and Tears",
    `Forever and Ever...`,
    //"We Shall Dance",
    //"Island of Love"
]

exports.getMusics = _ => {
    const idx = Math.floor(Math.random()*musics.length)
    return musics[idx]
}