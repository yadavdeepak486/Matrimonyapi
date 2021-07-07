const userDetails = require("../models/userdetails")


const GLOBALFUNCTIONS = require("../functions/createOtp.js")
const bcrypt = require('bcryptjs');

const SendOtp = require('sendotp')
const sendOtp = new SendOtp('API KEY')
const key = 'verysecretkey' // Key for cryptograpy. Keep it secret
const crypto = require('crypto')


exports.adddetails = async (req, res) => {    
    const {MatriID,Prefix,dum_id,franchiseecode,Termsofservice,ConfirmEmail,ConfirmPassword,Profilecreatedby,Referenceby,Name,Gender,DOB,Age,TOB,POB,Maritalstatus,childrenlivingstatus,Education,EducationDetails,Occupation,OccupationDetail,Employedin,Annualincome,Religion,Caste,Subcaste,Gothram,Language,Star,Moonsign,Horosmatch,Manglik,Height,Weight,BloodGroup,Bodytype,spe_cases,Complexion,Diet,Smoke,Drink,Address,City,State,Country,phone_country_code,Phone,countrycode,Mobile,Residencystatus,Fathername,Mothersname,Fatherlivingstatus,Motherlivingstatus,Fathersoccupation,Mothersoccupation,Profile,par_profile,Looking,FamilyDetails,Familyvalues,FamilyType,FamilyStatus,FamilyOrigin,noofbrothers,noofsisters,nbm,nsm,PE_FromAge,PE_ToAge,PE_HaveChildren,PE_Height,PE_Complexion,PE_MotherTongue,PartnerExpectations,PE_Religion,PE_Caste,PE_Education,PE_Countrylivingin,PE_Residentstatus,Hobbies,OtherHobbies,Interests,OtherInterests,Status,memtype,Regdate,IP,last_ip,Ref,Agent,DeleteAction,MemshipExpiryDate,expdays,Horoscheck,HorosApprove,PhotoProtect,PhotoprotectPassword,Video,Videocheck,Noofcontacts,photocheck,photochecklist,videochecklist,Horoschecklist,DOBday,DOBmonth,DOByear,Orderstatus,Photo1,Photo1Approve,Photo2,Photo2Approve,Photo3,Photo3Approve,photo_remind_cnt,Logincount,Lastlogin,Thislogin,dumprofile,prosta,pagecount,noyusisters,noyubrothers,matchalertstatus,matchalertsentdate,crop,PE_Height2,quick,HomeTown,FB,r3,r4,r5,r6,r7,r8,r9,r10,r11,r12,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,thosam,horosother,dummy,dasatype,dasayear,dasamonth,dasadate,featured,fri_email,agt_id,agt_email,verify_email,OnlineUsers,mobileverify,mobileverifycode,profileupdateCode,otp_time,token,NoOfChild,childLivingWith,PE_occupation,PE_hometown,PE_living_in,PE_manglik,PE_other_expectation,PE_looking_for,disability,typeOfDisability,whatsapp_country_code,whatsapp_phone,identity_proof,identity_proof_verified,account_manager,signup_platform,login_platform,Assign   } = req.body

    const passwordHash = bcrypt.hashSync(ConfirmPassword, 10);
    
    const DATA = new userDetails({
        MatriID:MatriID,//main
        Prefix:Prefix,
        dum_id:dum_id,
        franchiseecode:franchiseecode,
        Termsofservice:Termsofservice,
        ConfirmEmail:ConfirmEmail,
        ConfirmPassword:passwordHash,
        Profilecreatedby:Profilecreatedby,
        Referenceby:Referenceby,
        Name:Name,
        Gender:Gender,
        DOB:DOB,
        Age:Age,
        TOB:TOB,
        POB:POB,
        Maritalstatus:Maritalstatus,
        childrenlivingstatus:childrenlivingstatus,
        Education:Education,
        EducationDetails:EducationDetails,
        Employedin:Employedin,Occupation:Occupation,        
        Occupation:Occupation,        
        OccupationDetail:OccupationDetail,Annualincome:Annualincome,
        Religion:Religion,
        Caste:Caste,
        Subcaste:Subcaste,
        Gothram:Gothram,
        Language:Language,
        Star:Star,
        Moonsign:Moonsign,
        Horosmatch:Horosmatch,
        Manglik:Manglik,
        Height:Height,
        Weight:Weight,
        BloodGroup:BloodGroup,
        Bodytype:Bodytype,
        spe_cases:spe_cases,
        Complexion:Complexion,
        Diet:Diet,
        Smoke:Smoke,
        Drink:Drink,
        Address:Address,
        City:City,
        State:State,
        Country:Country,
        phone_country_code:phone_country_code,
        Phone:Phone,
        countrycode:countrycode,
        Mobile:Mobile,
        Residencystatus:Residencystatus,
        Fathername:Fathername,
        Mothersname:Mothersname,
        Fatherlivingstatus:Fatherlivingstatus,
        Motherlivingstatus:Motherlivingstatus,
        Fathersoccupation:Fathersoccupation,
        Mothersoccupation:Mothersoccupation,
        Profile:Profile,
        par_profile:par_profile,
        Looking:Looking,
        FamilyDetails:FamilyDetails,
        Familyvalues:Familyvalues,
        FamilyType:FamilyType,
        FamilyStatus:FamilyStatus,
        FamilyOrigin:FamilyOrigin,
        noofbrothers:noofbrothers,
        noofsisters:noofsisters,
        nbm:nbm,
        nsm:nsm,
        PE_FromAge:PE_FromAge,
        PE_ToAge:PE_ToAge,
        PE_HaveChildren:PE_HaveChildren,
        PE_Height:PE_Height,
        PE_Complexion:PE_Complexion,
        PE_MotherTongue:PE_MotherTongue,
        PartnerExpectations:PartnerExpectations,
        PE_Religion:PE_Religion,
        PE_Caste:PE_Caste,
        PE_Education:PE_Education,
        PE_Countrylivingin:PE_Countrylivingin,
        PE_Residentstatus:PE_Residentstatus,
        Hobbies:Hobbies,
        OtherHobbies:OtherHobbies,
        Interests:Interests,
        OtherInterests:OtherInterests,
        Status:Status,
        memtype:memtype,
        Regdate:Regdate,
        IP:IP,
        last_ip:last_ip,
        Ref:Ref,
        Agent:Agent,
        DeleteAction:DeleteAction,
        MemshipExpiryDate:MemshipExpiryDate,
        expdays:expdays,
        Horoscheck:Horoscheck,
        HorosApprove:HorosApprove,
        PhotoProtect:PhotoProtect,
        PhotoprotectPassword:PhotoprotectPassword,
        Video:Video,
        Videocheck:Videocheck,
        Noofcontacts:Noofcontacts,
        photocheck:photocheck,
        photochecklist:photochecklist,
        videochecklist:videochecklist,
        Horoschecklist:Horoschecklist,
        DOBday:DOBday,
        DOBmonth:DOBmonth,
        DOByear:DOByear,
        Orderstatus:Orderstatus,
        Photo1:Photo1,
        Photo1Approve:Photo1Approve,
        Photo2:Photo2,
        Photo2Approve:Photo2Approve,
        Photo3:Photo3,
        Photo3Approve:Photo3Approve,
        photo_remind_cnt:photo_remind_cnt,
        Logincount:Logincount,
        Lastlogin:Lastlogin,
        Thislogin:Thislogin,
        dumprofile:dumprofile,
        prosta:prosta,
        pagecount:pagecount,
        noyusisters:noyusisters,
        noyubrothers:noyubrothers,
        matchalertstatus:matchalertstatus,
        matchalertsentdate:matchalertsentdate,crop:crop,PE_Height2:PE_Height2,quick:quick,HomeTown:HomeTown,FB:FB,r3:r3,r4:r4,r5:r5,r6:r6,r7:r7,r8:r8,r9:r9,r10:r10,r11:r11,r12:r12,a1:a1,a2:a2,a3:a3,a4:a4,a5:a5,a6:a6,a7:a7,a8:a8,a9:a9,a10:a10,a11:a11,a12:a12,thosam:thosam,horosother:horosother,dummy:dummy,dasatype:dasatype,dasayear:dasayear,dasamonth:dasamonth,dasadate:dasadate,featured:featured,fri_email:fri_email,agt_id:agt_id,agt_email:agt_email,verify_email:verify_email,
        OnlineUsers:OnlineUsers,
        mobileverify:mobileverify,
        mobileverifycode:mobileverifycode,
        profileupdateCode:profileupdateCode,
        otp_time:otp_time,
        token:token,
        NoOfChild:NoOfChild,
        childLivingWith:childLivingWith,
        PE_occupation:PE_occupation,
        PE_hometown:PE_hometown,
        PE_living_in:PE_living_in,
        PE_manglik:PE_manglik,
        PE_other_expectation:PE_other_expectation,
        PE_looking_for:PE_looking_for,
        disability:disability,
        typeOfDisability:typeOfDisability,
        whatsapp_country_code:whatsapp_country_code,
        whatsapp_phone:whatsapp_phone,
        identity_proof:identity_proof,
        identity_proof_verified:identity_proof_verified,
        account_manager:account_manager,
        signup_platform:signup_platform,
        login_platform:login_platform,
        Assign:Assign     
    })

    /// check user not registered
    const FIND_USER = await userDetails.findOne({ Mobile: Mobile })
    if (FIND_USER) {
        res.send({ MSG: "USER ALREADY REGISTERED WITH THIS MOBILE NUMBER" })
    }
    else {
        
        await DATA.save().then((result) => {
            res.send({ RESPONCE: result })
        }).catch((e) => {
            res.send({ ERROR: e })
        })
    }
}

exports.login = async (req, res) => {
    const { Mobile,password} = req.body

    try {
        const FIND_USER = await usersDetails.findOne({ Mobile: Mobile })
        if (FIND_USER ) {
            if(bcrypt.compareSync(password, FIND_USER.password)){
                res.send({userDetails : FIND_USER})
            }
            else{
                res.send({MSG: "Incorrect Password"})
            }
        }
        else {
            res.send({ MSG: "USER DOES NOT EXSIST" })
            
        }
    } catch { }
}



exports.setting = async (req, res) => {
    const updatedChange = await userDetails.findOneAndUpdate({ _id: req.params.id }, { $set: req.body },{new: true})
    .then((updateddetails)=>{
        res.json({
            msg: 'changes successful',
            updateddetails
        })
    })
    .catch((err)=>{
        res.send(err)
    })
}

exports.viewdetails = async (req,res)=>{
    const finddetails = await userDetails.findOne({ _id: req.params.id })
    if (finddetails) {
        res.send(finddetails)
    }
    else {
        res.send("Something went wrong")
    }
}


exports.allusers = async (req, res) => {
    const findall = await userDetails.find()
    if(findall){
        res.status(200).json({
            status: true,
            msg: "success",
            data: findall
        })
    } else {
        res.status(400).json({
            status: false,
            msg: "error",
            error: "error"
        })
    }
}




////Other APIS
