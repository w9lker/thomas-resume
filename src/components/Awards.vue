<template>
    <body>
        <div class="header">
            <div class="header-image">
                <img src="../assets/Awards_cover.jpg" style="margin-top:200px;" >
            </div>
            <div class="caption">
                <div class="caption-content">
                <p>"Photo of Jacob with poster judges after receiving award for poster at PAA's 
                2018 Annual Meeting Migration, Immigration, Geographic Mobility Poster Session"</p>
                </div>
            </div>
        </div>
        <div class="awards-body">
            <div class="wrapper">
                <h1>Awards, Grants and Honors</h1>
                <div class="awards">
                    <div class="CUHK award-section">
                        <h4>The Chinese University of Hong Kong</h4>
                        <ul>
                            <li><b>2022-2023</b> General Research Fund Grant <span>($78,600)</span> for study “Who Realizes Their Online Intentions
                            To Emigrate? What Distinguishes Emigrants from Potential Emigrants in the Context of Rapid and
                            Sudden Social Change.” Hong Kong University Grant Committee (GRF-funded survey project
                            website: www.hkemigrationproject.space )</li>
                            <li> Direct Grant <span>($6,500)</span>, <b>2023</b>, Chinese University of Hong Kong for study “Does What We Can See
                            Matter for American Opinion About Gun Regulation? Experimental Impact of Images of a Bleeding
                            Dead Child and a ‘Good Guy With a Gun’”</li>
                            <li>Direct Grant <span>($6,500)</span>, <b>2022</b>, Chinese University of Hong Kong for study “Who Realizes Their
                            Online Intentions To Emigrate? What Distinguishes Emigrants from Potential Emigrants in the
                            Context of Rapid and Sudden Social Change”</li>
                        </ul>
                    </div>
                    <div class="UCLA award-section">
                        <h4>University of California Los Angeles</h4>
                        <ul>
                            <li>Aristide Zolberg Distinguished Student Scholar Award, Honorable Mention, <b>2020</b>,
                            American Sociological Association, International Migration Section</li>
                            <li>Graduate Student Fellowship <span>($6000)</span>, <b>2020</b>, UCLA Department of Fellowship</li>
                            <li>Institute for American Cultures Research Grant <span>($1000)</span>, <b>2020</b>, UCLA Institute for American Cultures Executive Committee</li>
                            <li>Population Association of America Annual Meeting 2018, Migration, Immigration, Geographic Mobility Poster Session, Prize Awarded for Poster “Who Does a Government Perceive as Immigrants Before They Even Migrate?”</li>
                             <li>Hiroshi Wagatsuma Memorial Fellowship <span>($5000)</span>, <b>2020</b>, UCLA Asia Pacific Center</li>
                            <li>UCLA 5th Year Fellowship <span>($24000)</span>, 2018-2019, UCLA Graduate Division</li>
                            <li>Institute for Humane Studies Ph.D Fellowships <span>($4000 each, four)</span>, <b>2016-2019</b>, Institute for Humane Studies</li>
                            <li>China Confucius Studies Ph.D Research Fellowship <span>($8000)</span>, <b>Fall 2018</b>, China Scholarship Council</li>
                            <li>Ethnic Studies Grant for Asian American Studies <span>($500)</span>, <b>2015</b>, UCLA Institute for American Cultures</li>
                            <li>California Immigration Research Initiative <span>($8000)</span>, <b>2017</b>, UCSD Center for Comparative Immigration Studies</li>
                            <li>Foreign Language Area Studies Fellowships to Study Chinese in China and U.S. <span>($8,000-15,000 each, four)</span>, 
                            <b>2017-2018</b> and <b>2014-2015</b> Academic Years and <b>Summer 2015</b> and <b>2017</b>, UCLA Asia Pacific Center, U.S. Department of Education</li>
                            <li>Boren National Security Fellowship <span>($23900)</span> for Mandarin study at Peking University & Beijing Cultural and Language University,
                            <b>2015-2016</b>, Institute for International Education</li>
                            <li>UCLA Graduate Summer Research Mentorship Fellowship <span>($6000 each, two)</span>, <b>2014 and 2015</b>, Graduate Division</li>
                        </ul>
                    </div>
                    <div class="UChicago award-section">
                        <h4>University of Chicago</h4>
                        <ul>
                            <li>University Un-endowed Scholarship for M.A. Program in Social Sciences <span>($15000)</span>, <b>2011-2012</b> 
                            Masters of Arts Program in Social Sciences, University of Chicago</li>
                        </ul>
                    </div>
                    <div class="UCB award-section">
                        <h4>University of California, Berkeley</h4>
                        <ul>
                            <li>Highest Honors in Interdisciplinary Studies Field Major and Distinction in General Scholarship,
                            Interdisciplinary Studies Field Major Program, UC Berkeley’s College of Letters and Sciences</li>
                        </ul>
                    </div>
                </div>
            </div>
    </div>
    </body>
</template>
<style scoped>
    .header{
        position: relative;
        color:black;
    }
    .caption-content{
        position: absolute;
        width:400px;
    }
    .caption{
        display:flex;
        justify-content: end;
    }
    .award-section{
        padding-top:50px;
    }
    h4{
        font-weight: bold;
    }
    .no-bullets{
        list-style-type: none; /* Remove bullets */
        padding: 0; /* Remove padding */
        margin: 0; /* Remove margins */
    }
    .awards span{
        color:blue;
        font-weight: bold;
    }
    .awards-body{
        margin-top:100px;
    }
    .header-image{
        height:400px;
        overflow:hidden;
        display:flex;
        overflow:hidden;
        height:400px;
        display:flex;
        justify-content: center;
        align-items:center;
    }
    .header-image > img{
        /* width:100%; */
        /* height:auto; */
        object-fit: cover;
    }
    h1{
        text-align: center;
        font-weight: bold;
    }
    li{
        font-size: large;
    }
    .wrapper {
        margin-left:auto;
        margin-right:auto;
        max-width: 1200px;
        padding-right: 10px; 
        padding-left:  10px;
    }
</style>
