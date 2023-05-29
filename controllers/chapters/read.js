import Chapter from '../../models/Chapter.js';

export default (req,res)=>{
    try {
        let all = Chapter.find()
        if (all){
            return res.status(200).json({
                message:'chapters found',
                success:'true'
            });
        }
    } catch (error) {
        return res.status(500).json({
            message:'error'
        })
    }
}