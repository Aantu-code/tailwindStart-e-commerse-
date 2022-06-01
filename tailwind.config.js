module.exports = {
  content: ["public/*.{html,js}"],
  // "public/*.{html,js}"
  //"./public/**/*.{html,js}"
  theme: {
    screens: {

      'sm': '768px',
      // => @media (min-width: 768px) { ... }

      'md': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1536px',
      // => @media (min-width: 1280px) { ... }

    //   '2xl': '1536px',
    //   // => @media (min-width: 1536px) { ... }
    // }
    },
    extend: {
      width: {
        '128': '45vh',
      },
      lineHeight: {
       '12': '3rem',
      },
      margin: {
        '5px': '5px',
        '10rem':'10rem',
        '70px':'70px'
       
      },
     
      height:{
      '120':'30rem',
      '1':'.1rem',
      '152':'38rem',
      '180':'45rem',
      '68': '68vh',
      '50': "50vh"
      },
      
      padding:{
      'header-left':'12rem',
      '6.5rem':'6.5rem',
      '13rem':'13rem',
      },
      inset: {
        '80%':'80%',
        '6%': '62%',
        '36%':'36%',
        '40%':'40%',
        '30%':'30%',
        '80%':'80%',
        // '25rem':'25rem',
        '32rem':'32rem',
        
      },
      fontSize:{
        'header':'5rem',
        '15px' :'15px',
        'new':'1.6rem',
        'custom':'5.5rem'
    },
      colors:{
        'bookmark-purple':'#FDF4F4',
        'bookmark-red':'#FA5959',
        'bookmark-blue':'#5DCCB8',
        'bookmark-grey':'#DEDAE1',
        'bookmark-white':'#F7F3FB',
        'bookmark-soft': '#EBF8F3',
        'bookmark-soft-blue':'#5DCCB8',
        'bookmark-new-gray': '#888888',
        'bookmark-black': '#939193',
        'bookmark-royel-sky' : '#EBF8F3',
        'bookmark-soft-gray' : '#F7F3FB' ,
        'bookmark-one':'#BD3576',
        'bookmark-two':'#B13CC3',
        'bookmark-three':'#65C27F' ,
        'bookmark-four': '#F7FCFB',
        'bookmark-five': '#E8E8E8',
        'bookmark-six':'#B9B9B9',
        'bokmark-seven':'#EEEEEE',
        'bookmark-eight': '#A7BBCD'
        
      },
      
        fontFamily:{
          'mont':['Mont']
        },
 
    }
   
  },
  variants:{
    fill: ['hover', 'focus'],
    backgroundColor:['active'],
extend:{
display:['group-focus'],
opacity:['group-focus'],
inset:['group-focus']
},
  },
  plugins: [],

}
