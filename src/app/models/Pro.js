class Pro{
    
    constructor(
        age, 
        education_level, 
        sales, 
        support, 
        download_speed, 
        upload_speed,
        writing_score,
        referral_code) {        
        this._age = age;
        this._education_level = education_level;
        this._sales = sales;
        this._support = support;
        this._download_speed = download_speed;
        this._upload_speed = upload_speed;
        this._writing_score = writing_score;
        this._referral_code = referral_code;
        Object.freeze(this);
    }    
    get age() {
        return this._age;
    }    
    get education_level() {
        return this._education_level;
    }    
    get sales() {
        return this._sales;
    }
    get support() {
        return this._support;
    }
    get download_speed() {
        return this._download_speed;
    }
    get upload_speed() {
        return this._upload_speed;
    }
    get writing_score() {
        return this._writing_score;
    }
    get referral_code() {
        return this._referral_code;
    }   
}