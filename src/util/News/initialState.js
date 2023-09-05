const newsData = [
    {
        "id": "1",
        "image": "/img/News/news1.png",
        "nameNews": "How to Build Climate Change-Resilient Infrastructure",
        "category": "Industry News",
        "date": "June 24, 2020",
        "comments": "4",
        "singleImage": "/img/News/newsPage_1.png",
        "textComent": {
            "coment1": {
                "name": "Devon Lane",
                "email": "DevonLane@gmail.com",
                "DateComent": "July 15, 2020",
                "reply": "",
                "textComent": "Phasellus varius faucibus ultrices odio in. Massa neque dictum natoque ornare rutrum malesuada et phasellus. Viverra natoque nulla cras vel nisl proin senectus. Tortor sed eleifend ante tristique felis sed urna aliquet. Suspendisse fames egestas sed duis purus diam et."
            },
            "coment2": {
                "name": "Annette Black",
                "email": "AnnetteBlack@gmail.com",
                "DateComent": "1 day ago",
                "reply": "@Devon Lane",
                "textComent": "Egestas fermentum natoque sollicitudin mauris. Facilisis praesent urna sed rhoncus quis pharetra pellentesque erat sagittis."
            },
            "coment3": {
                "name": "Albert Flores",
                "email": "AlbertFlores@gmail.com",
                "DateComent": "July 7, 2020",
                "reply": "",
                "textComent": "Libero commodo sit dui ac proin. Penatibus ultricies at adipiscing mauris nunc. Fames faucibus nisl duis id diam."
            },
            "coment4": {
                "name": "Marvin McKinney",
                "email": "MarvinMcKinney@gmail.com",
                "DateComent": "June 28, 2020",
                "reply": "",
                "textComent": "Ullamcorper nibh sed ac ipsum nunc imperdiet rhoncus. Quam donec habitant nibh sit consequat erat libero, tincidunt. Eros ut aliquam proin et duis. Mauris, egestas congue nibh dui a nulla."
            }
        }
    },
    {
        "id": "2",
        "image": "/img/News/news2.png",
        "nameNews": "How Construction Can Help Itself",
        "category": "Innovation",
        "date": "June 12, 2020",
        "comments": "No",
        "singleImage": "/img/News/newsPage_1.png",
        "textComent": {}
    },
    {
        "id": "3",
        "image": "/img/News/news3.png",
        "nameNews": "The Difference Between a Digger and an Excavator",
        "category": "Expert Tips",
        "date": "May 16, 2020",
        "comments": "No",
        "singleImage": "/img/News/newsPage_1.png",
        "textComent": {}
    },
    {
        "id": "4",
        "image": "/img/News/news4.png",
        "nameNews": "Building Construction Hand Tools",
        "category": "Expert Tips",
        "date": "February 25, 2020",
        "comments": "1",
        "singleImage": "/img/News/newsPage_1.png",
        "textComent": {
            "coment1": {
                "name": "Devon Lane",
                "email": "DevonLane@gmail.com",
                "DateComent": "July 15, 2020",
                "reply": "",
                "textComent": "Phasellus varius faucibus ultrices odio in. Massa neque dictum natoque ornare rutrum malesuada et phasellus. Viverra natoque nulla cras vel nisl proin senectus. Tortor sed eleifend ante tristique felis sed urna aliquet. Suspendisse fames egestas sed duis purus diam et."
            }
        }
    },
    {
        "id": "5",
        "image": "/img/News/news5.png",
        "nameNews": "Top 10 Construction Trends",
        "category": "Industry News",
        "date": "January 14, 2020",
        "comments": "No",
        "singleImage": "/img/News/newsPage_1.png",
        "textComent": {}
    },
    {
        "id": "6",
        "image": "/img/News/news6.png",
        "nameNews": "Types of Flooring Materials",
        "category": "Company News",
        "date": "December 1, 2019",
        "comments": "No",
        "singleImage": "/img/News/newsPage_1.png",
        "textComent": {}
    },
    {
        "id": "7",
        "image": "/img/News/news6.png",
        "nameNews": "Types of Flooring Materials",
        "category": "Company News",
        "date": "December 1, 2019",
        "comments": "No",
        "singleImage": "/img/News/newsPage_1.png",
        "textComent": {}
    },
    {
        "id": "8",
        "image": "/img/News/news5.png",
        "nameNews": "Top 10 Construction Trends",
        "category": "Industry News",
        "date": "January 14, 2020",
        "comments": "No",
        "singleImage": "/img/News/newsPage_1.png",
        "textComent": {}
    },
    {
        "id": "9",
        "image": "/img/News/news4.png",
        "nameNews": "Building Construction Hand Tools",
        "category": "Expert Tips",
        "date": "February 25, 2020",
        "comments": "1",
        "singleImage": "/img/News/newsPage_1.png",
        "textComent": {
            "coment1": {
                "name": "Devon Lane",
                "email": "DevonLane@gmail.com",
                "DateComent": "July 15, 2020",
                "reply": "",
                "textComent": "Phasellus varius faucibus ultrices odio in. Massa neque dictum natoque ornare rutrum malesuada et phasellus. Viverra natoque nulla cras vel nisl proin senectus. Tortor sed eleifend ante tristique felis sed urna aliquet. Suspendisse fames egestas sed duis purus diam et."
            }
        }
    },
    {
        "id": "10",
        "image": "/img/News/news3.png",
        "nameNews": "The Difference Between a Digger and an Excavator",
        "category": "Expert Tips",
        "date": "May 16, 2020",
        "comments": "No",
        "singleImage": "/img/News/newsPage_1.png",
        "textComent": {}
    },
    {
        "id": "11",
        "image": "/img/News/news2.png",
        "nameNews": "How Construction Can Help Itself",
        "category": "Innovation",
        "date": "June 12, 2020",
        "comments": "No",
        "singleImage": "/img/News/newsPage_1.png",
        "textComent": {}
    },
    {
        "id": "12",
        "image": "/img/News/news1.png",
        "nameNews": "How to Build Climate Change-Resilient Infrastructure",
        "category": "Industry News",
        "date": "June 24, 2020",
        "comments": "4",
        "singleImage": "/img/News/newsPage_1.png",
        "textComent": {
            "coment1": {
                "name": "Devon Lane",
                "email": "DevonLane@gmail.com",
                "DateComent": "July 15, 2020",
                "reply": "",
                "textComent": "Phasellus varius faucibus ultrices odio in. Massa neque dictum natoque ornare rutrum malesuada et phasellus. Viverra natoque nulla cras vel nisl proin senectus. Tortor sed eleifend ante tristique felis sed urna aliquet. Suspendisse fames egestas sed duis purus diam et."
            },
            "coment2": {
                "name": "Annette Black",
                "email": "AnnetteBlack@gmail.com",
                "DateComent": "1 day ago",
                "reply": "@Devon Lane",
                "textComent": "Egestas fermentum natoque sollicitudin mauris. Facilisis praesent urna sed rhoncus quis pharetra pellentesque erat sagittis."
            },
            "coment3": {
                "name": "Albert Flores",
                "email": "AlbertFlores@gmail.com",
                "DateComent": "July 7, 2020",
                "reply": "",
                "textComent": "Libero commodo sit dui ac proin. Penatibus ultricies at adipiscing mauris nunc. Fames faucibus nisl duis id diam."
            },
            "coment4": {
                "name": "Marvin McKinney",
                "email": "MarvinMcKinney@gmail.com",
                "DateComent": "June 28, 2020",
                "reply": "",
                "textComent": "Ullamcorper nibh sed ac ipsum nunc imperdiet rhoncus. Quam donec habitant nibh sit consequat erat libero, tincidunt. Eros ut aliquam proin et duis. Mauris, egestas congue nibh dui a nulla."
            }
        }
    },
    {
        "id": "13",
        "image": "/img/News/news1.png",
        "nameNews": "How to Build Climate Change-Resilient Infrastructure",
        "category": "Industry News",
        "date": "June 24, 2020",
        "comments": "4",
        "singleImage": "/img/News/newsPage_1.png",
        "textComent": {
            "coment1": {
                "name": "Devon Lane",
                "email": "DevonLane@gmail.com",
                "DateComent": "July 15, 2020",
                "reply": "",
                "textComent": "Phasellus varius faucibus ultrices odio in. Massa neque dictum natoque ornare rutrum malesuada et phasellus. Viverra natoque nulla cras vel nisl proin senectus. Tortor sed eleifend ante tristique felis sed urna aliquet. Suspendisse fames egestas sed duis purus diam et."
            },
            "coment2": {
                "name": "Annette Black",
                "email": "AnnetteBlack@gmail.com",
                "DateComent": "1 day ago",
                "reply": "@Devon Lane",
                "textComent": "Egestas fermentum natoque sollicitudin mauris. Facilisis praesent urna sed rhoncus quis pharetra pellentesque erat sagittis."
            },
            "coment3": {
                "name": "Albert Flores",
                "email": "AlbertFlores@gmail.com",
                "DateComent": "July 7, 2020",
                "reply": "",
                "textComent": "Libero commodo sit dui ac proin. Penatibus ultricies at adipiscing mauris nunc. Fames faucibus nisl duis id diam."
            },
            "coment4": {
                "name": "Marvin McKinney",
                "email": "MarvinMcKinney@gmail.com",
                "DateComent": "June 28, 2020",
                "reply": "",
                "textComent": "Ullamcorper nibh sed ac ipsum nunc imperdiet rhoncus. Quam donec habitant nibh sit consequat erat libero, tincidunt. Eros ut aliquam proin et duis. Mauris, egestas congue nibh dui a nulla."
            }
        }
    },
    {
        "id": "14",
        "image": "/img/News/news2.png",
        "nameNews": "How Construction Can Help Itself",
        "category": "Innovation",
        "date": "June 12, 2020",
        "comments": "No",
        "singleImage": "/img/News/newsPage_1.png",
        "textComent": {}
    },
    {
        "id": "15",
        "image": "/img/News/news3.png",
        "nameNews": "The Difference Between a Digger and an Excavator",
        "category": "Expert Tips",
        "date": "May 16, 2020",
        "comments": "No",
        "singleImage": "/img/News/newsPage_1.png",
        "textComent": {}
    },
    {
        "id": "16",
        "image": "/img/News/news4.png",
        "nameNews": "Building Construction Hand Tools",
        "category": "Expert Tips",
        "date": "February 25, 2020",
        "comments": "1",
        "singleImage": "/img/News/newsPage_1.png",
        "textComent": {
            "coment1": {
                "name": "Devon Lane",
                "email": "DevonLane@gmail.com",
                "DateComent": "July 15, 2020",
                "reply": "",
                "textComent": "Phasellus varius faucibus ultrices odio in. Massa neque dictum natoque ornare rutrum malesuada et phasellus. Viverra natoque nulla cras vel nisl proin senectus. Tortor sed eleifend ante tristique felis sed urna aliquet. Suspendisse fames egestas sed duis purus diam et."
            },
        }
    },
    {
        "id": "17",
        "image": "/img/News/news5.png",
        "nameNews": "Top 10 Construction Trends",
        "category": "Industry News",
        "date": "January 14, 2020",
        "comments": "No",
        "singleImage": "/img/News/newsPage_1.png",
        "textComent": {}
    },
    {
        "id": "18",
        "image": "/img/News/news6.png",
        "nameNews": "Types of Flooring Materials",
        "category": "Company News",
        "date": "December 1, 2019",
        "comments": "No",
        "singleImage": "/img/News/newsPage_1.png",
        "textComent": {}
    },
    {
        "id": "19",
        "image": "/img/News/news1.png",
        "nameNews": "How to Build Climate Change-Resilient Infrastructure",
        "category": "Industry News",
        "date": "June 24, 2020",
        "comments": "4",
        "singleImage": "/img/News/newsPage_1.png",
        "textComent": {
            "coment1": {
                "name": "Devon Lane",
                "email": "DevonLane@gmail.com",
                "DateComent": "July 15, 2020",
                "reply": "",
                "textComent": "Phasellus varius faucibus ultrices odio in. Massa neque dictum natoque ornare rutrum malesuada et phasellus. Viverra natoque nulla cras vel nisl proin senectus. Tortor sed eleifend ante tristique felis sed urna aliquet. Suspendisse fames egestas sed duis purus diam et."
            },
            "coment2": {
                "name": "Annette Black",
                "email": "AnnetteBlack@gmail.com",
                "DateComent": "1 day ago",
                "reply": "@Devon Lane",
                "textComent": "Egestas fermentum natoque sollicitudin mauris. Facilisis praesent urna sed rhoncus quis pharetra pellentesque erat sagittis."
            },
            "coment3": {
                "name": "Albert Flores",
                "email": "AlbertFlores@gmail.com",
                "DateComent": "July 7, 2020",
                "reply": "",
                "textComent": "Libero commodo sit dui ac proin. Penatibus ultricies at adipiscing mauris nunc. Fames faucibus nisl duis id diam."
            },
            "coment4": {
                "name": "Marvin McKinney",
                "email": "MarvinMcKinney@gmail.com",
                "DateComent": "June 28, 2020",
                "reply": "",
                "textComent": "Ullamcorper nibh sed ac ipsum nunc imperdiet rhoncus. Quam donec habitant nibh sit consequat erat libero, tincidunt. Eros ut aliquam proin et duis. Mauris, egestas congue nibh dui a nulla."
            }
        }
    },
    {
        "id": "20",
        "image": "/img/News/news2.png",
        "nameNews": "How Construction Can Help Itself",
        "category": "Innovation",
        "date": "June 12, 2020",
        "comments": "No",
        "singleImage": "/img/News/newsPage_1.png",
        "textComent": {}
    },
    {
        "id": "21",
        "image": "/img/News/news3.png",
        "nameNews": "The Difference Between a Digger and an Excavator",
        "category": "Expert Tips",
        "date": "May 16, 2020",
        "comments": "No",
        "singleImage": "/img/News/newsPage_1.png",
        "textComent": {}
    },
    {
        "id": "22",
        "image": "/img/News/news4.png",
        "nameNews": "Building Construction Hand Tools",
        "category": "Expert Tips",
        "date": "February 25, 2020",
        "comments": "1",
        "singleImage": "/img/News/newsPage_1.png",
        "textComent": {
            "coment1": {
                "name": "Devon Lane",
                "email": "DevonLane@gmail.com",
                "DateComent": "July 15, 2020",
                "reply": "",
                "textComent": "Phasellus varius faucibus ultrices odio in. Massa neque dictum natoque ornare rutrum malesuada et phasellus. Viverra natoque nulla cras vel nisl proin senectus. Tortor sed eleifend ante tristique felis sed urna aliquet. Suspendisse fames egestas sed duis purus diam et."
            },
        }
    },
    {
        "id": "23",
        "image": "/img/News/news5.png",
        "nameNews": "Top 10 Construction Trends",
        "category": "Industry News",
        "date": "January 14, 2020",
        "comments": "No",
        "singleImage": "/img/News/newsPage_1.png",
        "textComent": {}
    },
    {
        "id": "24",
        "image": "/img/News/news6.png",
        "nameNews": "Types of Flooring Materials",
        "category": "Company News",
        "date": "December 1, 2019",
        "comments": "No",
        "singleImage": "/img/News/newsPage_1.png",
        "textComent": {}
    },
    {
        "id": "25",
        "image": "/img/News/news1.png",
        "nameNews": "How to Build Climate Change-Resilient Infrastructure",
        "category": "Industry News",
        "date": "June 24, 2020",
        "comments": "4",
        "singleImage": "/img/News/newsPage_1.png",
        "textComent": {
            "coment1": {
                "name": "Devon Lane",
                "email": "DevonLane@gmail.com",
                "DateComent": "July 15, 2020",
                "reply": "",
                "textComent": "Phasellus varius faucibus ultrices odio in. Massa neque dictum natoque ornare rutrum malesuada et phasellus. Viverra natoque nulla cras vel nisl proin senectus. Tortor sed eleifend ante tristique felis sed urna aliquet. Suspendisse fames egestas sed duis purus diam et."
            },
            "coment2": {
                "name": "Annette Black",
                "email": "AnnetteBlack@gmail.com",
                "DateComent": "1 day ago",
                "reply": "@Devon Lane",
                "textComent": "Egestas fermentum natoque sollicitudin mauris. Facilisis praesent urna sed rhoncus quis pharetra pellentesque erat sagittis."
            },
            "coment3": {
                "name": "Albert Flores",
                "email": "AlbertFlores@gmail.com",
                "DateComent": "July 7, 2020",
                "reply": "",
                "textComent": "Libero commodo sit dui ac proin. Penatibus ultricies at adipiscing mauris nunc. Fames faucibus nisl duis id diam."
            },
            "coment4": {
                "name": "Marvin McKinney",
                "email": "MarvinMcKinney@gmail.com",
                "DateComent": "June 28, 2020",
                "reply": "",
                "textComent": "Ullamcorper nibh sed ac ipsum nunc imperdiet rhoncus. Quam donec habitant nibh sit consequat erat libero, tincidunt. Eros ut aliquam proin et duis. Mauris, egestas congue nibh dui a nulla."
            }
        }
    },
    {
        "id": "26",
        "image": "/img/News/news2.png",
        "nameNews": "How Construction Can Help Itself",
        "category": "Innovation",
        "date": "June 12, 2020",
        "comments": "No",
        "singleImage": "/img/News/newsPage_1.png",
        "textComent": {}
    },
    {
        "id": "27",
        "image": "/img/News/news3.png",
        "nameNews": "The Difference Between a Digger and an Excavator",
        "category": "Expert Tips",
        "date": "May 16, 2020",
        "comments": "No",
        "singleImage": "/img/News/newsPage_1.png",
        "textComent": {}
    },
    {
        "id": "28",
        "image": "/img/News/news4.png",
        "nameNews": "Building Construction Hand Tools",
        "category": "Expert Tips",
        "date": "February 25, 2020",
        "comments": "1",
        "singleImage": "/img/News/newsPage_1.png",
        "textComent": {
            "coment1": {
                "name": "Devon Lane",
                "email": "DevonLane@gmail.com",
                "DateComent": "July 15, 2020",
                "reply": "",
                "textComent": "Phasellus varius faucibus ultrices odio in. Massa neque dictum natoque ornare rutrum malesuada et phasellus. Viverra natoque nulla cras vel nisl proin senectus. Tortor sed eleifend ante tristique felis sed urna aliquet. Suspendisse fames egestas sed duis purus diam et."
            },
        }
    },
    {
        "id": "29",
        "image": "/img/News/news5.png",
        "nameNews": "Top 10 Construction Trends",
        "category": "Industry News",
        "date": "January 14, 2020",
        "comments": "No",
        "singleImage": "/img/News/newsPage_1.png",
        "textComent": {}
    },
    {
        "id": "30",
        "image": "/img/News/news6.png",
        "nameNews": "Types of Flooring Materials",
        "category": "Company News",
        "date": "December 1, 2019",
        "comments": "No",
        "singleImage": "/img/News/newsPage_1.png",
        "textComent": {}
    },
    {
        "id": "31",
        "image": "/img/News/news1.png",
        "nameNews": "How to Build Climate Change-Resilient Infrastructure",
        "category": "Industry News",
        "date": "June 24, 2020",
        "comments": "4",
        "singleImage": "/img/News/newsPage_1.png",
        "textComent": {
            "coment1": {
                "name": "Devon Lane",
                "email": "DevonLane@gmail.com",
                "DateComent": "July 15, 2020",
                "reply": "",
                "textComent": "Phasellus varius faucibus ultrices odio in. Massa neque dictum natoque ornare rutrum malesuada et phasellus. Viverra natoque nulla cras vel nisl proin senectus. Tortor sed eleifend ante tristique felis sed urna aliquet. Suspendisse fames egestas sed duis purus diam et."
            },
            "coment2": {
                "name": "Annette Black",
                "email": "AnnetteBlack@gmail.com",
                "DateComent": "1 day ago",
                "reply": "@Devon Lane",
                "textComent": "Egestas fermentum natoque sollicitudin mauris. Facilisis praesent urna sed rhoncus quis pharetra pellentesque erat sagittis."
            },
            "coment3": {
                "name": "Albert Flores",
                "email": "AlbertFlores@gmail.com",
                "DateComent": "July 7, 2020",
                "reply": "",
                "textComent": "Libero commodo sit dui ac proin. Penatibus ultricies at adipiscing mauris nunc. Fames faucibus nisl duis id diam."
            },
            "coment4": {
                "name": "Marvin McKinney",
                "email": "MarvinMcKinney@gmail.com",
                "DateComent": "June 28, 2020",
                "reply": "",
                "textComent": "Ullamcorper nibh sed ac ipsum nunc imperdiet rhoncus. Quam donec habitant nibh sit consequat erat libero, tincidunt. Eros ut aliquam proin et duis. Mauris, egestas congue nibh dui a nulla."
            }
        }
    },
    {
        "id": "32",
        "image": "/img/News/news2.png",
        "nameNews": "How Construction Can Help Itself",
        "category": "Innovation",
        "date": "June 12, 2020",
        "comments": "No",
        "singleImage": "/img/News/newsPage_1.png"
    },
    {
        "id": "33",
        "image": "/img/News/news3.png",
        "nameNews": "The Difference Between a Digger and an Excavator",
        "category": "Expert Tips",
        "date": "May 16, 2020",
        "comments": "No",
        "singleImage": "/img/News/newsPage_1.png",
        "textComent": {}
    },
    {
        "id": "34",
        "image": "/img/News/news4.png",
        "nameNews": "Building Construction Hand Tools",
        "category": "Expert Tips",
        "date": "February 25, 2020",
        "comments": "1",
        "singleImage": "/img/News/newsPage_1.png",
        "textComent": {
            "coment1": {
                "name": "Devon Lane",
                "email": "DevonLane@gmail.com",
                "DateComent": "July 15, 2020",
                "reply": "",
                "textComent": "Phasellus varius faucibus ultrices odio in. Massa neque dictum natoque ornare rutrum malesuada et phasellus. Viverra natoque nulla cras vel nisl proin senectus. Tortor sed eleifend ante tristique felis sed urna aliquet. Suspendisse fames egestas sed duis purus diam et."
            },
            "coment2": {
                "name": "Annette Black",
                "email": "AnnetteBlack@gmail.com",
                "DateComent": "1 day ago",
                "reply": "@Devon Lane",
                "textComent": "Egestas fermentum natoque sollicitudin mauris. Facilisis praesent urna sed rhoncus quis pharetra pellentesque erat sagittis."
            },
            "coment3": {
                "name": "Albert Flores",
                "email": "AlbertFlores@gmail.com",
                "DateComent": "July 7, 2020",
                "reply": "",
                "textComent": "Libero commodo sit dui ac proin. Penatibus ultricies at adipiscing mauris nunc. Fames faucibus nisl duis id diam."
            },
            "coment4": {
                "name": "Marvin McKinney",
                "email": "MarvinMcKinney@gmail.com",
                "DateComent": "June 28, 2020",
                "reply": "",
                "textComent": "Ullamcorper nibh sed ac ipsum nunc imperdiet rhoncus. Quam donec habitant nibh sit consequat erat libero, tincidunt. Eros ut aliquam proin et duis. Mauris, egestas congue nibh dui a nulla."
            }
        }
    },
    {
        "id": "35",
        "image": "/img/News/news5.png",
        "nameNews": "Top 10 Construction Trends",
        "category": "Industry News",
        "date": "January 14, 2020",
        "comments": "No",
        "singleImage": "/img/News/newsPage_1.png",
        "textComent": {}
    },
    {
        "id": "36",
        "image": "/img/News/news6.png",
        "nameNews": "Types of Flooring Materials",
        "category": "Company News",
        "date": "December 1, 2019",
        "comments": "No",
        "singleImage": "/img/News/newsPage_1.png",
        "textComent": {}
    }
]

export default newsData;