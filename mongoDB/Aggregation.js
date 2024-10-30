/**
An aggregation pipeline consists of one or more stages that process documents:

 - Each stage performs an operation on the input documents. For example, a stage can filter documents, group documents, and calculate values.
 - The documents that are output from a stage are passed to the next stage.
 - An aggregation pipeline can return results for groups of documents. For example, return the total, average, maximum, and minimum values.
 
 


 collection.aggregate([
    {
        $lookup: {
            from: "authors".
            localField: "author_id",
            foreignField: "_id",
            as: "author_details"  // name of collection  
        }
    },
    {
        $addFields : {
            author_details: {
                $first: "$author_details" or $arryayEleAt["$author_details", 0] // get first element
            }
        }
    }

]);


--------------

 user.aggregate([
    {$match: { username: username?.toLowerCase() } },
    {
        $lookup: {
            from: "subscriptions".
            localField: "_id",
            foreignField: "channel",
            as: "sebscribers"   
        }
    },
    {
        $lookup: {
            from: "subscriptions".
            localField: "_id",
            foreignField: "subscriber",
            as: "sebscribedTo"   
        }
    },
    {
        $addFields: {
            subscribersCount: {
                $size: "$sebscribers"
            },
            channelSubscribedToCount: {
                $size: "$sebscribedTo"
            },
            isSubscribed: {
                $cond: {
                    if($in : [req.user?.id, "$sebscribers.sebscriber"])  /// $sebscribers.sebscriber looking from array or object
                    then: true,
                    else: false
                }
            }
        }
    },
    {
        $project: {
            fullName:1,
            userName:1,
            subscribersCount:1,
            channelSubscribedToCount:1,
            isSubscribed:1,

        }
    }
 ])

 ----------------------
 User.aggregate([
    {
        $match: new mongoose.Type.ObjectId(req.user_id)
    },
    {
            $lookup : {
                from: 'video',
                localField:'watchHistory',
                foreignFeild: 'id',
                as : 'watchHistory',
                pipeline: [
                    {
                        $lookup : {
                        from:'users',
                        localFeild:'owner', // use from watchHistory
                        foreignFeild:'_id',
                        as:'owner',
                        pipeline:[
                            {
                                $project:{
                                    fullNameL:1,
                                    uerName:1,
                                    avatar:1
                                },
                                {}
                            }
                        ]
                    }
                },
                {
                    $addFields:{
                        owner:{
                            $first: '$owner'
                        }
                    }
                }
            ]
        }
    }
 ])


 
 
 
 * 
 */

