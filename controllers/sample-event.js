const { request } = require("express");
const cloudinary = require("../middleware/cloudinary");
const Post = require("../models/Post");
const Comment = require("../models/Comment")
const SampleEvent = require("../models/SampleForm")

module.exports = {
//   getProfile: async (req, res) => {
//     try {
//       const posts = await Post.find({ user: req.user.id });
//       res.render("profile.ejs", { posts: posts, user: req.user });
//     } catch (err) {
//       console.log(err);
//     }
//   },
//   getFeed: async (req, res) => {
//     try {
//       const posts = await Post.find().sort({ createdAt: "desc" }).lean();
//       res.render("feed.ejs", { posts: posts });
//     } catch (err) {
//       console.log(err);
//     }
//   },
    // getPost: async (req, res) => {
    //     try {
    //     const post = await Post.findById(req.params.id);
    //     const comment = await Comment.find({postId: req.params.id}).sort({ createdAt: "desc" }).lean();
    //     res.render("post.ejs", { post: post, user: req.user, comment: comment });
    //     } catch (err) {
    //     console.log(err);
    //     }
    // },
    
//get request for the sample history
    getSampleHistory: async (req, res) => {
        try{
            const sampleEvents = await SampleEvent.find()
            res.render('sample-history.ejs', {eventList: sampleEvents})
        } catch (err){
            if (err) return res.status(500).send(err)
        }
      
    },
//get request for a new blank sampling from
    getSamplingForm : async (req, res) => {
        try {
            //   const profile = await Post.find({ user: req.user.id }); //used to find the posts of the user linked to user ID
              const form = await SampleEvent.find()
              res.render('sample-event.ejs', {sampleForm: form, user: req.user.id}) //{ posts: posts, user: req.user }
          } catch (err){
              if (err) return res.status(500).send(err)
          }
    },
    createSampleEvent : async (req, res) => {
        
        // Upload image to cloudinary
        // const result = await cloudinary.uploader.upload(req.file.path);
        console.log(req.body)
        const newSampleEvent = new SampleEvent({
                wellName: req.body.wellName,
                dateSampled: req.body.dateSampled,
                fieldStaff: req.body.fieldStaff,
                sampler: req.body.sampler,
                swl: req.body.swl,
                correction: req.body.correction,
                cSWL: req.body.correctedSWL,
                totalizerTotal: req.body.totalizerTotal,
                timeTotal: req.body.timeTotal,
                averageDischarge: req.body.averageDischarge,
                purgeVolume: req.body.purgeVolume,
                estPurgeTime: req.body.estPurgeTime,
        })
        try {
        await newSampleEvent.save();
        console.log("A Sample Event has been added!");
        res.redirect("/profile");
        } catch (err) {
        console.log(err);
        }
    },

//   createPost: async (req, res) => {
//     try {
//       // Upload image to cloudinary
//       const result = await cloudinary.uploader.upload(req.file.path);

//       await Post.create({
//         title: req.body.title,
//         image: result.secure_url,
//         cloudinaryId: result.public_id,
//         caption: req.body.caption,
//         likes: 0,
//         user: req.user.id,
//       });
//       console.log("Post has been added!");
//       res.redirect("/profile");
//     } catch (err) {
//       console.log(err);
//     }
//   },
//   likePost: async (req, res) => {
//     try {
//       await Post.findOneAndUpdate(
//         { _id: req.params.id },
//         {
//           $inc: { likes: 1 },
//         }
//       );
//       console.log("Likes +1");
//       res.redirect(`/post/${req.params.id}`);
//     } catch (err) {
//       console.log(err);
//     }
//   },
//   deletePost: async (req, res) => {
//     try {
//       // Find post by id
//       let post = await Post.findById({ _id: req.params.id });
//       // Delete image from cloudinary
//       await cloudinary.uploader.destroy(post.cloudinaryId);
//       // Delete post from db
//       await Post.remove({ _id: req.params.id });
//       console.log("Deleted Post");
//       res.redirect("/profile");
//     } catch (err) {
//       res.redirect("/profile");
//     }
//   },
};