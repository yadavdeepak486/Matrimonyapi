const mongoose = require("mongoose")
var AutoIncrement = require('mongoose-sequence')(mongoose);
const Schema = mongoose.Schema


const registerSchema = new Schema({

    MatriID: {
        type: Number,
        // index: { unique: true }
    },
    Prefix: {
        type: String,
    }, //dynamic prefix
    franchiseecode: {
        type: String,
    },// not in use
    ConfirmEmail: {
        type: String,
    },//isme mail id
    ConfirmPassword: {
        type: String,
    },// password
    Profilecreatedby: { type: Schema.Types.ObjectId, ref: 'profilefor' },
    //dynamic ref id
    //kiske liye profile create ki
    Name: {
        type: String,
    },//
    firstName: {
        type: String,
    },//
    LastName: {
        type: String,
    },//
    Gender: {
        // Male & Female
    },
    DOB: {
        type: Number,
    },//
    Age: {
        type: String,
    },//calculated
    TOB: {
        type: String,
    },//
    POB: {
        type: String,
    },//text input
    Maritalstatus: { type: Schema.Types.ObjectId, ref: 'maritalstatus' },//dynamic
    childrenlivingstatus: {
        type: Number,
    },//both
    Education: { type: Schema.Types.ObjectId, ref: 'education' },//dynamic education
    EducationDetails: {
        type: String,
    },//text
    Occupation: { type: Schema.Types.ObjectId, ref: 'occupation' },//dynamic
    OccupationDetail: {
        type: String,
    },//text
    Employedin: { type: Schema.Types.ObjectId, ref: 'employedin' },//dynamic 
    Annualincome: {
        type: String,
    },//1lakh-2lakh, 2
    Religion: { type: Schema.Types.ObjectId, ref: 'religion' },//dynamic
    Caste: { type: Schema.Types.ObjectId, ref: 'caste' },//dynamic
    PSubcaste: {
        type: String,
    },//text
    MSubcaste: {
        type: String,
    },//text
    Gothram: {
        type: String,
    },//text
    Language: { type: Schema.Types.ObjectId, ref: 'language' },//dynamic
    Star: { type: Schema.Types.ObjectId, ref: 'star' },//???? dynamic
    Moonsign: { type: Schema.Types.ObjectId, ref: 'moonsign' },//??? dynamic
    Horosmatch: {
        type: String,
    },//text Must, Not-Required
    Manglik: {
        type: String,
    },// lena he data jarur ge
    Height: { type: Schema.Types.ObjectId, ref: 'height' },// ref id
    Weight: {
        type: String,
    },//
    BloodGroup: {
        type: String,
    },// drop down
    Bodytype: {
        type: String,
    },// average, slim, heavy, athele
    spe_cases: {
        type: String,
    },//drop down
    Complexion: {
        type: String,
    },//drop down
    Diet: {
        type: String,
    },// drop down
    Smoke: {
        type: String,
    },// drop down
    Drink: {
        type: String,
    },// drop down
    Address: {
        type: String,
    },//user input
    City: { type: Schema.Types.ObjectId, ref: 'city' },//dynamic
    State: { type: Schema.Types.ObjectId, ref: 'state' },//dynamic
    Country: { type: Schema.Types.ObjectId, ref: 'country' },//dynamic
    LCity: { type: Schema.Types.ObjectId, ref: 'city' },//dynamic
    LState: { type: Schema.Types.ObjectId, ref: 'state' },//dynamic
    LCountry: { type: Schema.Types.ObjectId, ref: 'country' },//dynamic
    phone_country_code: {
        type: String,
    },//+91 alternate country code
    Phone: {
        type: Number,
    },//alternate mobile
    countrycode: {
        type: String,
    },//from signup 
    Mobile: {
        type: Number,
    },// from user
    Residencystatus: {
        type: String,
    },// dropdowns 
    Fathersoccupation: {
        type: String,
    },
    Mothersoccupation: {
        type: String,
    },
    Profile: {
        type: String,
    },//Description
    par_profile: {
        type: String,
    },//doubtful
    FamilyDetails: {
        type: String,
    },
    Familyvalues: {
        type: String,
    },//text value drop down
    FamilyType: {
        type: String,
    },//joint family nuclear family dropdown
    FamilyStatus: {
        type: String,
    },//upper class middle class dropdown
    FamilyOrigin: {
        type: String,
    },//state city dynamic
    noofbrothers: {
        type: Number,
    },//from drop down
    noofsisters: {
        type: Number,
    },// from dropdown
    nbm: {
        type: Number,
    },// no of married brother // total se km ya barobar
    nsm: {
        type: Number,
    },//// no of married sister // total se km ya barobar


    ///Partner Expectation
    PE_FromAge: {
        type: Number,
        default: 18
    },//parterner expectation
    PE_ToAge: {
        type: Number,
        default: 100
    },//parterner expectation
    PE_HaveChildren: {
        type: String,
    },//yes no doesnt matter
    PE_Height: {
        type: String,
    },
    PE_Heightto: {
        type: String,
    },
    PE_Complexion: [{
        type: String,
    }],// multiple check array
    PE_MotherTongue: [{
        type: String,
    }],// multiple check array
    PartnerExpectations: [{
        type: String,
    }],// string 1000 words min 50 words // admin approval
    PE_Religion: [{ type: Schema.Types.ObjectId, ref: 'religion' }],//dynamic, multiple selection
    PE_Caste: [{
        type: Schema.Types.ObjectId, ref: 'caste'
    }],//dynamic, multiple selection
    PE_Education: [{ type: Schema.Types.ObjectId, ref: 'education' }],//dynamic, multiple selection
    PE_Countrylivingin: [{ type: Schema.Types.ObjectId, ref: 'country' }],//dynamic, multiple selection
    PE_Residentstatus: [{ type: Schema.Types.ObjectId, ref: 'country' }],//dynamic, multiple selection


    ///Personal
    Hobbies: {
        type: String,
    },// personal text input drop down
    Status: {
        type: String,
        default: "Inactive"
    },//Actice //Expired //payed
    memtype: {
        type: String,
    },//Gold //Silver //brownze   
    Regdate: {
        type: String
    },//signup ki date
    IP: {
        type: String,
    },// ip of machine net he she is surfing on
    last_ip: {
        type: String,
    },// last ip
    Ref: {
        type: String,
    },// device platform
    Agent: {
        type: String,
    },// browser name
    DeleteAction: {
        type: String,
    },// doubtfull
    MemshipExpiryDate: {
        type: String,
    },// date for active it will be non
    expdays: {
        type: String,
    },// date //doubt
    Horoscheck: {
        type: String,
    },//doubt
    HorosApprove: {
        type: String,
    },//doubt
    Noofcontacts: {
        type: String,
    },// how many contacts viewed
    DOBday: {
        type: String,
    },//
    DOBmonth: {
        type: String,
    },//
    DOByear: {
        type: String,
    },//
    Orderstatus: {
        type: Boolean,
    },//
    Photo1: {
        type: String,
        default: "nophoto.gif"
    },//Cloudinary
    Photo1Approve: {
        type: String,
        default: "No"
    },//
    Photo2: {
        type: String,
        default: "nophoto.gif"
    },
    Photo2Approve: {
        type: String,
        default: "No"
    },
    Photo3: {
        type: String,
        default: "nophoto.gif"
    },
    Photo3Approve: {
        type: String,
        default: "No"
    },
    Photo4: {
        type: String,
        default: "nophoto.gif"
    },
    Photo4Approve: {
        type: String,
        default: "No"
    },
    Photo5: {
        type: String,
        default: "nophoto.gif"
    },
    Photo5Approve: {
        type: String,
        default: "No"
    },
    Lastlogin: {
        type: String,
    },//date and time
    Thislogin: {
        type: String,
    },//date and time
    dumprofile: {
        type: String,
    },//template welcome to my profile and this that 
    prosta: {
        type: String,
        default: "NA"
    },//doubt
    pagecount: {
        type: String,
    },//visit of account
    noyusisters: {
        type: Number,
    },//younger 
    noyubrothers: {
        type: Number,
    },//younger 
    matchalertstatus: {
        type: String,
    },//
    matchalertsentdate: {
        type: String,
    },
    HomeTown: {
        type: String,
    },//static proper city
    featured: {
        type: Boolean,
        default: false
    },//drop down
    OnlineUsers: {
        type: String,
        default: "0"
    },// to know where the user is online or not
    mobileverify: {
        type: Boolean,
        default: false
    },//
    NoOfChild: {
        type: Number,
    },// input
    childLivingWith: {
        type: String,
    },//yes no both
    PE_occupation: [{ type: Schema.Types.ObjectId, ref: 'occupatin' }],// array of values
    PE_hometown: [{ type: Schema.Types.ObjectId, ref: 'city' }],// array of values
    PE_living_in: [{ type: Schema.Types.ObjectId, ref: 'city' }],// array of values
    PE_manglik: [{
        type: String,
        default: "Any"
    }],// array of values
    PE_looking_for: [{
        type: String,
        default: "Any"
    }],//Married unmarried, //// array of reference
    disability: {
        type: String,
        default: "No Disablity"
    },//drop down static
    typeOfDisability: {
        type: String,
        default: "No Disablity"
    },//as in mobile app
    whatsapp_country_code: {
        type: String,
    },//whatsapp country code
    whatsapp_phone: {
        type: String,
    },// number input
    identity_proof: {
        type: String,
    },//image proof path
    identity_proof_verified: {
        type: Boolean,
        default: false
    },
    account_manager: { type: Schema.Types.ObjectId, ref: 'admin' },// reference id
    Assign: { type: Schema.Types.ObjectId, ref: 'admin' },// array of object id
    bannedStatus: {
        type: Boolean,
        default: false
    },
    blockedby: [{ type: Schema.Types.ObjectId, ref: 'user' }],//user block
    reportedusers: [{ type: Schema.Types.ObjectId, ref: 'user' }],//

},
    { timestamps: true }
)

registerSchema.plugin(AutoIncrement, { id: 'order_seq', inc_field: 'MatriID' })
module.exports = mongoose.model("user", registerSchema)