const userDetails = require("../models/user")


const GLOBALFUNCTIONS = require("../functions/createOtp.js")
const bcrypt = require('bcryptjs');

const SendOtp = require('sendotp')
const sendOtp = new SendOtp('API KEY')
const key = 'verysecretkey' // Key for cryptograpy. Keep it secret
const crypto = require('crypto')


exports.adddetails = async (req, res) => {
    const { Prefix, franchiseecode, ConfirmEmail, ConfirmPassword, Profilecreatedby, Name, firstName, LastName, Gender, DOB, TOB, POB, Maritalstatus, childrenlivingstatus, Education, EducationDetails, Employedin, Occupation, OccupationDetail, Annualincome, Religion, Caste, PSubcaste, MSubcaste, Gothram, Language, Star, Moonsign, Horosmatch, Manglik, Height, Weight, BloodGroup, Bodytype, spe_cases, Complexion, Diet, Smoke, Drink, Address, City, State, Country, LCity, LState, LCountry, phone_country_code, Phone, countrycode, Mobile, Fathersoccupation, Mothersoccupation, Profile, par_profile, FamilyDetails, Familyvalues, FamilyType, FamilyStatus, FamilyOrigin, noofbrothers, noofsisters, nbm, nsm, PE_FromAge, PE_ToAge, PE_HaveChildren, PE_Height, PE_Complexion, PE_MotherTongue, PartnerExpectations, PE_Religion, PE_Caste, PE_Education, PE_Countrylivingin, PE_Residentstatus, Hobbies, Status, memtype, Regdate, IP, last_ip, Ref, Agent, DeleteAction, MemshipExpiryDate, expdays, Horoscheck, HorosApprove, DOBday, DOBmonth, DOByear, Orderstatus, Photo1, Photo1Approve, Photo2, Photo2Approve, Photo3, Photo3Approve, Photo4, Photo4Approve, Photo5, Photo5Approve, Lastlogin, Thislogin, dumprofile, prosta, pagecount, noyusisters, noyubrothers, matchalertstatus, matchalertsentdate, HomeTown, featured, OnlineUsers, mobileverify, NoOfChild, childLivingWith, PE_occupation, PE_hometown, PE_living_in, PE_manglik, PE_other_expectation, PE_looking_for, disability, typeOfDisability, whatsapp_country_code, whatsapp_phone, identity_proof, identity_proof_verified, account_manager, Assign, blockedby, reportedusers } = req.body

    //Hash password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(ConfirmPassword, salt);


    // tasks
    //age to calculate age
    const calcage = function getAge(DOB) {
        var today = new Date();
        var birthDate = new Date(DOB);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }
    console.log(calcage(DOB))
    //nbm nsm rule

    const DATA = new userDetails({
        // MatriID: MatriID,//autoincrement
        Prefix: Prefix,
        franchiseecode: franchiseecode,
        ConfirmEmail: ConfirmEmail,
        ConfirmPassword: hashPassword,//hashed password
        Profilecreatedby: Profilecreatedby,
        Name: Name,
        firstName: firstName,
        LastName: LastName,
        Gender: Gender,
        DOB: DOB,
        Age: calcage(DOB),
        TOB: TOB,
        POB: POB,
        Maritalstatus: Maritalstatus,
        childrenlivingstatus: childrenlivingstatus,
        Education: Education,
        EducationDetails: EducationDetails,
        Employedin: Employedin,
        Occupation: Occupation,
        OccupationDetail: OccupationDetail, Annualincome: Annualincome,
        Religion: Religion,
        Caste: Caste,
        PSubcaste: PSubcaste,
        MSubcaste: MSubcaste,
        Gothram: Gothram,
        Language: Language,
        Star: Star,
        Moonsign: Moonsign,
        Horosmatch: Horosmatch,
        Manglik: Manglik,
        Height: Height,
        Weight: Weight,
        BloodGroup: BloodGroup,
        Bodytype: Bodytype,
        spe_cases: spe_cases,
        Complexion: Complexion,
        Diet: Diet,
        Smoke: Smoke,
        Drink: Drink,
        Address: Address,
        City: City,
        State: State,
        Country: Country,
        LCity: LCity,
        LState: LState,
        LCountry: LCountry,
        phone_country_code: phone_country_code,
        Phone: Phone,
        countrycode: countrycode,
        Mobile: Mobile,
        Fathersoccupation: Fathersoccupation,
        Mothersoccupation: Mothersoccupation,
        Profile: Profile,
        par_profile: par_profile,
        FamilyDetails: FamilyDetails,
        Familyvalues: Familyvalues,
        FamilyType: FamilyType,
        FamilyStatus: FamilyStatus,
        FamilyOrigin: FamilyOrigin,
        noofbrothers: noofbrothers,
        noofsisters: noofsisters,
        nbm: nbm,
        nsm: nsm,
        PE_FromAge: PE_FromAge,
        PE_ToAge: PE_ToAge,
        PE_HaveChildren: PE_HaveChildren,
        PE_Height: PE_Height,
        PE_Complexion: PE_Complexion,
        PE_MotherTongue: PE_MotherTongue,
        PartnerExpectations: PartnerExpectations,
        PE_Religion: PE_Religion,
        PE_Caste: PE_Caste,
        PE_Education: PE_Education,
        PE_Countrylivingin: PE_Countrylivingin,
        PE_Residentstatus: PE_Residentstatus,
        Hobbies: Hobbies,
        Status: Status,
        memtype: memtype,
        Regdate: Regdate,
        IP: IP,
        last_ip: last_ip,
        Ref: Ref,
        Agent: Agent,
        DeleteAction: DeleteAction,
        MemshipExpiryDate: MemshipExpiryDate,
        expdays: expdays,
        Horoscheck: Horoscheck,
        HorosApprove: HorosApprove,
        DOBday: DOBday,
        DOBmonth: DOBmonth,
        DOByear: DOByear,
        Orderstatus: Orderstatus,
        Photo1: Photo1,
        Photo1Approve: Photo1Approve,
        Photo2: Photo2,
        Photo2Approve: Photo2Approve,
        Photo3: Photo3,
        Photo3Approve: Photo3Approve,
        Photo4: Photo4,
        Photo4Approve: Photo4Approve,
        Photo5: Photo5,
        Photo5Approve: Photo5Approve,
        Lastlogin: Lastlogin,
        Thislogin: Thislogin,
        dumprofile: dumprofile,
        prosta: prosta,
        pagecount: pagecount,
        noyusisters: noyusisters,
        noyubrothers: noyubrothers,
        matchalertstatus: matchalertstatus,
        matchalertsentdate: matchalertsentdate, HomeTown: HomeTown, featured: featured,
        OnlineUsers: OnlineUsers,
        mobileverify: mobileverify,
        NoOfChild: NoOfChild,
        childLivingWith: childLivingWith,
        PE_occupation: PE_occupation,
        PE_hometown: PE_hometown,
        PE_living_in: PE_living_in,
        PE_manglik: PE_manglik,
        PE_other_expectation: PE_other_expectation,
        PE_looking_for: PE_looking_for,
        disability: disability,
        typeOfDisability: typeOfDisability,
        whatsapp_country_code: whatsapp_country_code,
        whatsapp_phone: whatsapp_phone,
        identity_proof: identity_proof,
        identity_proof_verified: identity_proof_verified,
        account_manager: account_manager,
        Assign: Assign,
        blockedby: blockedby,
        reportedusers: reportedusers,
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
    const { MatriID, Mobile, password } = req.body
    console.log(MatriID, password)

    const finddetails = await userDetails.findOne({ $or: [{ MatriID: MatriID }, { Mobile: Mobile }] })
    //const user = await usersDetails.findOne({ MatriID: MatriID })
    //const user = await usersDetails.findOne({ $or: [{ MatriID: MatriID }, { Mobile: Mobile }] })

    if (finddetails) {
        res.send(finddetails)
        // res.send({ user: finddetails })
        //const validPass = await bcrypt.compare(password, finddetails.password);
        // console.log(validPass)

        // if (validPass) {
        //     const token = jwt.sign({ id: finddetails._id, MatriID: finddetails.MatriID }, key);
        //     res.header("auth-token", token).status(200).send({
        //         status: true,
        //         token: token,
        //         msg: "success",
        //         user: user,
        //         user_type: "user"
        //     });
        // }
        // else {
        //     res.send({ MSG: "Incorrect Password" })
        // }
    }
    else {
        res.send({ MSG: "USER DOES NOT EXSIST" })
    }

}



exports.setting = async (req, res) => {
    const updatedChange = await userDetails.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true })
        .then((updateddetails) => {
            res.json({
                msg: 'changes successful',
                updateddetails
            })
        })
        .catch((err) => {
            res.send(err)
        })
}

exports.viewdetails = async (req, res) => {
    const finddetails = await userDetails.findOne({ _id: req.params.id })
    if (finddetails) {
        res.status(200).json({
            status: true,
            msg: "success",
            data: finddetails
        })
    }
    else {
        res.status(400).json({
            status: false,
            msg: "error",
            error: "error"
        })
    }
}


exports.allusers = async (req, res) => {
    const findall = await userDetails.find()
    if (findall) {
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

exports.alltypeusers = async (req, res) => {
    const findall = await userDetails.find({ memtype: req.params.type })
    if (findall) {
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



exports.alldeletedusers = async (req, res) => {
    const findall = await userDetails.find({ DeleteAction: "Active" })
    if (findall) {
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


exports.allblockedusers = async (req, res) => {
    const findall = await userDetails.find({ blockedStatus: true })
    if (findall) {
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

exports.allreportedusers = async (req, res) => {
    const findall = await userDetails.find({ reportStatus: true })
    if (findall) {
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



//not working now
exports.allexcept = async (req, res) => {
    const { id } = req.body
    const findall = await userDetails.find()
    if (findall) {
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


exports.deleteuser = async (req, res) => {
    try {
        const deleteentry = await userDetails.deleteOne({ _id: req.params.id })
        res.status(200).json({
            status: true,
            msg: "success",
            data: deleteentry
        })
    } catch (error) {
        res.status(400).json({
            status: false,
            msg: "error",
            error: error
        })
    }
}



////Other APIS
