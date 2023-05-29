import User from '../../models/User.js';

export default (req,res)=>{
    try {
        let all = User.find()
        if (all){
            return res.status(200).json({
                message:'users found',
                success:'true'
            });
        }
    } catch (error) {
        return res.status(500).json({
            message:'error'
        })
    }
}