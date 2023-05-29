import Manga from '../../models/Manga.js'

export default (req,res)=>{
    try {
        let all = Manga.find()
        if (all){
            return res.status(200).json({
                message:'mangas found',
                success:'true'
            });
        }
    } catch (error) {
        return res.status(500).json({
            message:'error'
        })
    }
}