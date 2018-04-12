export function getUsers(){
    return(
        {
            "EOF": false,
            "Students": [
                {
                    "firstname"		: "Chet",
                    "photo"			: "https://lh3.googleusercontent.com/di",
                    "coop"			: "Apple",
                    "undergraddegree"	: "Finance",
                    "undergradschool"	: "MIT",
                    "graduationyear"		: "2017"
                }]
        }
    )}

export function getTopUniversities(){
    return(
        {
            "undergradschools": ["MIT", "GWU", "NYU", "Yale"]
        })
}

export function getTopCoops(){
    return(
        {
            "coops": ["Apple", "Google", "Microsoft", "HP"]
        })
}

export function getTopDegrees(){
    return(
        {
            "undergraddegrees": ["Mathematics", "Chemistry", "Accounting", "Physics"]
        })
}

export function getTopYears(){
    return(
        {
            "graduationyears": ["2015", "2017", "2018", "2020"]
        })
}

export function getAllDegrees(){
    return(
        {
            "undergraddegrees": ["Finance", "Biology", "Mathematics", "Chemistry", "Accounting", "Physics"]
        })
}

export function getAllCoops(){
    return(
        {
            "coops": ["Apple", "Atari", "Burger King", "Google", "Dell", "Microsoft", "HP"]
        })
}

export function getAllYears(){
    return(
        {
            "graduationyears": ["2015", "2016", "2017", "2018", "2019", "2020"]
        })
}

export function getAllUniversities(){
    return(
        {
            "undergradschools": ["MIT", "GWU", "NYU", "Yale", "Brown", "Tannenbaum", "McDonalds University"]
        })
}
