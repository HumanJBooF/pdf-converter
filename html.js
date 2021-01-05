const html = (args) => `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>html pdf converter</title>
        <!-- <link rel="stylesheet" href="assets/styles.css" /> -->
        <style>
            .tech-pdf-wrapper {
                color: #231f20;
                font-family: 'Honeywell Sans', serif;
                font-style: normal;
                font-weight: 500;
            }

            .r-pdf-header {
                margin-bottom: 50px;
            }

            .r-pdf-header img {
                height: auto;
                width: 100%;
            }

            .tech-pdf-wrapper h1 {
                font-family: "Access Extra Bold";
                font-size: 28px;
                font-weight: 800;
                line-height: 1;
                margin-bottom: 50px;
                margin-top: 0;
                text-align: center;
            }

            .tech-pdf-body {
                position: relative;
            }

            .tech-pdf-body.demo-pdf {
                background-image: url('images/pdfs/demo-background.png');
                /* background-position: left 1375px; */
                background-position: 0 10%;
                background-repeat: repeat-y;
            }

            .tech-pdf-body .container {
                position: relative;
                z-index: 9;
            }

            .document-numbers span {
                display: block;
            }

            hr {
                border: 0;
                border-bottom: 1px solid #273990;
            }

            /* Statuses */

            .good-status {
                color: #1f9b2d;
            }

            .marginal-status {
                color: #ff9900;
            }

            .needs_attention-status {
                color: #ee3124;
            }

            /* Align Helpers */

            .align-center {
                text-align: center;
            }

            .align-left {
                text-align: left;
            }

            .align-right {
                text-align: right;
            }

            .tech-pdf-wrapper .honeywell-logo {
                margin-bottom: 40px;
            }

            .tech-pdf-wrapper .row {
                margin-left: 0;
                margin-right: 0;
            }

            .tech-pdf-wrapper .row:after {
                clear: both;
                content: "";
                display: table;
            }

            .tech-pdf-wrapper .row.two-column .column {
                float: left;
                width: 50%;
            }

            .tech-pdf-wrapper .row.two-column .column.air-advice-badge {
                position: relative;
            }

            /* Section Heading */

            .tech-pdf-wrapper .section-header-wrap {
                border-bottom: 1pt solid #273990;
                height: 38px;
                margin-bottom: 10px;
                position: relative;
            }

            .tech-pdf-wrapper .section-header-wrap .section-heading {
                color: #273990;
                font-family: "Access Extra Bold";
                font-size: 19px;
                font-weight: 800;
                position: relative;
            }

            .tech-pdf-wrapper .section-header-wrap .air-advice-badge {
                position: relative;
            }

            .tech-pdf-wrapper .section-header-wrap .air-advice-badge img {
                height: 38px;
                position: absolute;
                right: 0;
                top: 0;
                width: auto;
                z-index: 1;
            }

            /*
  Table Styles
*/

            .tech-pdf-wrapper table {
                margin-bottom: 25px;
                position: relative;
                width: 100%;
                z-index: 9;
            }

            .tech-pdf-wrapper table:first-child {
                margin-bottom: 50px;
            }

            /* Table Head */

            .tech-pdf-wrapper table thead {
                color: #4d4d4f;
                font-size: 7.5pt;
            }

            .tech-pdf-wrapper table thead th {
                font-style: italic;
                font-weight: 400;
                text-align: left;
            }

            /*
  Table Body
*/

            .tech-pdf-wrapper tbody {}

            .tech-pdf-wrapper .what-we-measured tbody tr {
                height: 20px;
                line-height: 20px;
                padding: 0;
            }

            .tech-pdf-wrapper .what-we-measured tbody tr td {
                font-size: 11px;
                margin-bottom: 5px;
                padding: 5px 0;
            }

            .control-icon {
                height: 20px;
                vertical-align: top;
                margin-right: 2px;
                width: 20px;
            }

            .tech-pdf-wrapper tbody tr td span {
                font-family: arial, 'Honeywell Sans Extra Bold';
                font-weight: 800;
                height: 15px;
                line-height: 15px;
            }

            .tech-pdf-wrapper .what-we-measured tbody tr td span {
                font-family: arial, 'Honeywell Sans Extra Bold', serif;
                font-weight: 800;
                height: 20px;
                line-height: 20px;
            }

            .tech-pdf-wrapper .what-we-measured tbody tr td:nth-child(1) {
                color: #34383a;
                font-family: 'Honeywell Sans Extra Bold', serif;
                font-weight: 800;
            }

            .tech-pdf-wrapper .what-we-measured tbody tr td:nth-child(2) {
                font-weight: 800;
            }

            .tech-pdf-wrapper .what-we-measured tbody tr td:nth-child(3),
            .tech-pdf-wrapper .what-we-measured tbody tr td:nth-child(4) {
                color: #231f20;
            }

            .why-it-matters {
                border-bottom: 1px solid #273990;
                position: relative;
            }

            .why-it-matters.temperature {
                margin-bottom: 0;
            }

            .why-it-matters,
            .why-it-matters tr,
            .why-it-matters tr td {
                margin-bottom: 0;
                padding-bottom: 0;
            }

            .tech-pdf-wrapper table.why-it-matters tbody tr {
                margin: 0;
                padding: 0;
            }

            .tech-pdf-wrapper table.why-it-matters tbody tr td {
                vertical-align: top;
            }

            .tech-pdf-wrapper table.why-it-matters tbody tr td.summary {
                padding-bottom: 10px;
            }

            .tech-pdf-wrapper table.why-it-matters tbody tr td.dial-column {
                max-width: 175px;
                width: 175px;
            }

            .tech-pdf-wrapper table.why-it-matters tbody tr td.dial-column img {
                height: auto;
                width: 100%;
            }

            .summary {
                padding-right: 10px;
            }

            .title-wrap .title,
            .title-wrap .status-wrap {
                display: inline-block;
            }

            .title-wrap {
                margin-bottom: 5px;
            }

            .title-wrap .title {
                font-family: arial, 'Honeywell Sans Extra Bold', serif;
                font-size: 19px;
                font-weight: 700;
            }

            .title-wrap .status-wrap {
                margin-left: 20px;
            }

            .title-wrap .status-wrap img {
                position: relative;
                top: -2px;
                vertical-align: middle;
            }

            .summary .description {
                color: #231f20;
                font-size: 8.3pt;
                line-height: 1.3;
                -webkit-font-smoothing: antialiased;
                margin-bottom: 10px;
                padding-right: 10px;
            }

            .summary .bullet-header {
                color: #273990;
                font-family: arial;
                font-style: italic;
                font-weight: 800;
            }

            .summary .bullet-content {
                font-size: 12px;
                line-height: 1.15;
            }

            .summary .bullet-content ul {
                margin: 0;
                padding: 0 0 0 10px;
            }

            .summary .bullet-content ul li {
                list-style-position: outside;
                margin-left: 0.5em;
            }

            .dial-column {
                text-align: center;
            }

            .chart-section {
                line-height: 1;
                margin-top: -50px;
                position: relative;
                z-index: 9;
            }

            .chart-section .chart-range-ppm {
                margin-bottom: 10px;
            }

            .chart-section .chart-range {
                color: #273990;
                font-size: 22px;
            }

            .chart-section .ppm {
                color: #273990;
            }

            .chart-section .temp {
                color: #273990;
            }

            .chart-section .chart-type {
                display: block;
                margin-bottom: 2px;
            }

            .chart-section .chart-type {
                font-size: 11px;
            }

            .chart-section .ranges {
                line-height: 11px;
            }

            .chart-section .ranges span {
                color: #273990;
                display: block;
                font-size: 11px;
                line-height: 11px;
            }

            .dial {
                position: relative;
                height: 133px;
                width: 175px;
                z-index: 1;
            }

            .temp-dial {
                position: relative;
                height: 140px;
                width: 175px;
            }

            .needle {
                height: 50px;
                width: 5px;
                background: #273990;
                border-bottom-left-radius: 5px;
                border-bottom-right-radius: 5px;
                border-top-left-radius: 100%;
                border-top-right-radius: 100%;
                display: inline-block;
                position: absolute;
                right: 85px;
                top: 35px;
                -webkit-transform-origin: bottom;
            }

            .needle-odor {
                height: 50px;
                top: 25px;
            }

            .microgram {
                font-family: arial !important;
                font-weight: 300 !important;
            }

            body.pdf-body {
                font-size: 14px;
            }

            .r-pdf-header {
                margin-bottom: 20px;
            }

            .r-pdf-header img {
                height: auto;
                width: 100%;
            }

            .r-pdf-wrapper {
                color: #231f20;
                font-family: 'Honeywell Sans', serif;
                font-size: 14px;
                font-style: normal;
                font-weight: 500;
            }

            .r-pdf-wrapper .verdana-text {
                font-family: arial;
            }

            .r-pdf-wrapper .verdana-text.bold {
                font-weight: 700;
            }

            .r-pdf-wrapper .dashboard-header {
                display: flex;
                margin-top: 50px;
            }

            .r-pdf-wrapper .dashboard-header .column .document-title,
            .r-pdf-wrapper .dashboard-header .column .company-title {
                font-family: "Access Extra Bold";
                font-size: 20px;
                font-weight: 800;
                line-height: 1;
            }

            .r-pdf-wrapper .dashboard-header .column .document-title {
                align-items: flex-start;
                display: flex;
                justify-content: flex-start;
            }

            .r-pdf-wrapper .dashboard-header .column .document-placeholder {
                color: #fff;
                font-size: 22px;
            }

            .r-pdf-wrapper .dashboard-header .column.document-company {
                text-align: right;
            }

            .r-pdf-wrapper .dashboard-header .column.document-company .document-date {
                font-size: 22px;
            }

            .r-pdf-wrapper .copyright {
                color: #888;
                font-size: 11px;
                padding: 50px 0 0 0;
                text-align: left;
            }

            .r-pdf-wrapper .product-selling-table {
                width: 50%;
            }

            .r-pdf-wrapper .r-table {
                font-size: 11px !important;
            }

            .r-pdf-wrapper .r-table .border-bottom {
                border-width: 2px !important;
            }

            .r-pdf-wrapper .r-table .r-table-header {
                background-color: #a6a8ab;
                color: #fff;
            }

            .r-pdf-wrapper .r-table .r-table-header tr th {
                background-color: #a6a8ab;
                padding: 0;
                vertical-align: middle;
            }

            .r-pdf-wrapper .r-table .r-table-header.tall tr th {
                padding: 10px 0;
            }

            .r-pdf-wrapper .r-table tbody tr td {
                margin-bottom: 1px;
                padding: 5px;
            }

            .r-pdf-wrapper .r-table tbody tr td.company-border {
                border-bottom: 1px solid #ddebf6;
            }

            .r-pdf-wrapper .r-table tbody tr td .r-box {
                border-width: 1px !important;
            }

            .r-pdf-wrapper .r-table tbody tr td.r-td-border-top {
                border-top: 1px solid #191a00;
            }

            .r-pdf-wrapper .r-table tbody tr td.table-info {
                background-color: #ddebf6;
            }
        </style>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    </head>

    <body class="pdf-body tech-pdf-body ">
        <div class="container">
            <div class="tech-pdf-wrapper">
                <div class="r-pdf-header">
                    <img src="images/pdfs/resideo-header.jpg" alt="resideo" />
                </div>

                <div class="document-numbers">
                    <span class="monitor-number">Monitor: ${args.monitor_report}</span>
                    <span class="report-id">Report: <%= report_number %></span>
                    <span class="report-date">
                        <%= report_date %>
                    </span>
                </div>
                <h1>
                    The AirCycle in Your Home
                </h1>
                <div class="row two-column section-header-wrap">
                    <div class="column section-heading">
                        <span>What to care about</span>
                    </div>
                    <div class="column align-right air-advice-image">
                        <img src="images/pdfs/powered-by-aa.png" height="65px" width="auto" alt="resideo" />
                        <!-- <%= public_send(image_tag_type, "pdfs/powered-by-aa.png" , height:"65px", width:"auto", alt:"Air Advice")%> -->
                    </div>
                </div>
                <table class="what-we-measured">
                    <thead>
                        <th>What we measured</th>
                        <th>Control</th>
                        <th>Your Home</th>
                        <th>Acceptable Range</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Carbon Monoxide</td>
                            <td class="control-icon-column" valign="middle">
                                <img src="images/pdfs/good-icon.png" class="control-icon" />
                                <!-- <%= public_send(image_tag_type, "pdfs/#{range_value}-icon.png" , alt: range_value, class: "control-icon" ) %> -->
                                <span class="good-status">
                                    GOOD
                                </span>
                            </td>
                            <td>
                                <!-- some dynamic number here -->
                                <%= reading.to_f.round(1) %> ppm
                            </td>
                            <td>Less than 6.0 ppm</td>
                        </tr>
                        <tr>
                            <td>Odors & Smells</td>
                            <td>
                                <img src="images/pdfs/good-icon.png" class="control-icon" />
                                <!-- <%= public_send(image_tag_type, "pdfs/#{range_value}-icon.png" , alt:range_value, class: "control-icon" ) %> -->
                                <span class="good-status">
                                    GOOD
                                </span>
                            </td>
                            <td>
                                <!-- some dynamic number here -->
                                <%= number_with_delimiter(reading) %> <span class="microgram">&mu;</span>g/m3
                            </td>
                            <td>Less than 500 <span class="microgram">&mu;</span>g/m3</td>
                        </tr>
                        <tr>
                            <td>Relative Humidity</td>
                            <td>
                                <img src="images/pdfs/good-icon.png" class="control-icon" />
                                <!-- <%= public_send(image_tag_type, "pdfs/#{range_value}-icon.png" , alt:range_value, class: "control-icon" ) %> -->
                                <span class="good-status">
                                    GOOD
                                </span>
                            </td>
                            <td>
                                <!-- some dynamic number here -->
                                <%= reading.to_f.round(1) %> %
                            </td>
                            <td>35% - 55%</td>
                        </tr>
                        <tr>
                            <td>Carbon Dioxide</td>
                            <td>
                                <img src="images/pdfs/good-icon.png" class="control-icon" />
                                <!-- <%= public_send(image_tag_type, "pdfs/#{range_value}-icon.png" , alt:range_value,
                                    class: "control-icon" ) %> -->
                                <span class="good-status">
                                    GOOD
                                </span>
                            </td>
                            <td>
                                <!-- some dynamic number here -->
                                <%= number_with_delimiter(reading) %> ppm
                            </td>
                            <td>Less than 750 ppm</td>
                        </tr>
                        <tr>
                            <td>Temperature</td>
                            <td>
                                <img src="images/pdfs/marginal-icon.png" class="control-icon" />
                                <!-- <%= public_send(image_tag_type, "pdfs/#{range_value}-icon.png" , alt:range_value, class: "control-icon" ) %> -->
                                <span class="marginal-status">
                                    MARGINAL
                                </span>
                            </td>
                            <td>
                                <!-- Dynamic number here -->
                                <%= reading.to_f.round(1) %> &deg;F
                            </td>
                            <td>68&deg; - 75&deg;F</td>
                        </tr>
                        <tr>
                            <td>Particles</td>
                            <td>
                                <img src="images/pdfs/needs_attention-icon.png" class="control-icon" />
                                <!-- <%= public_send(image_tag_type, "pdfs/#{range_value}-icon.png" , alt:range_value, class: "control-icon" ) %> -->
                                <span class="needs_attention-status">
                                    NEEDS ATTENTION
                                    <!-- <%= range_value.humanize.upcase %> -->
                                </span>
                            </td>
                            <td>
                                <!-- Dynamic Number here -->
                                <%= reading.to_f.round(1) %> <span class="microgram">&mu;</span>g/m3
                            </td>
                            <td>Less than 10 <span class="microgram">&mu;</span>g/m3</td>
                        </tr>


                    </tbody>
                </table>
                <div class="readings-wrapper">
                    <div class="row two-column section-header-wrap">
                        <div class="column section-heading">
                            Why it matters
                        </div>
                    </div>
                    <table class="why-it-matters">
                        <tr>
                            <td class="summary">
                                <div class="title-wrap">
                                    <div class="title">
                                        Carbon Monoxide
                                    </div>
                                    <div class="status-wrap">
                                        <img src="images/pdfs/good-icon.png" class="control-icon" />
                                        <!-- <%= public_send(image_tag_type, "pdfs/#{range_value}-icon.png" ,alt:range_value,
                                            class: "control-icon" ) %> -->
                                        <span class="good-status">
                                            GOOD
                                            <!-- <%= range_value.humanize.upcase %> -->
                                        </span>
                                    </div>
                                </div>
                                <div class="description">
                                    You don't want carbon monoxide in your home.
                                    It's presence at levels above 6 ppm means there is a safety issue.
                                    Carbon monoxide (CO) is known as the "silent killer" and is a colorless,
                                    odorless, tasteless, nonirritating, poisonous gas produced by burning fuels.
                                    When levels are above 25 ppm, immediate action should be taken. CO can be
                                    found in low levels about 0.2 ppm in the atmosphere.
                                </div>
                                <div class="bullet-header">
                                    Potential Causes:
                                </div>
                                <div class="bullet-content">
                                    <ul>
                                        <li>
                                            Cracked heat exchanger on furnace, leaking vent or chimney.
                                        </li>
                                        <li>
                                            Inadequate or aging venting of combustion appliances (water heater, gas
                                            stove or dryer).
                                        </li>
                                        <li>
                                            Other sources of combustion in an attached garage (auto, gas generator).
                                        </li>
                                        <li>
                                            Cigarette smoke in the home.
                                        </li>
                                    </ul>
                                </div>
                            </td>
                            <td class="dial-column">
                                <div class="dial">
                                    <img src="images/pdfs/carbon-monoxide.png" alt="carbon-monoxide" />
                                    <!-- <%= public_send(image_tag_type, "pdfs/carbon-monoxide.png" , alt:"carbon monoxide
                                        meter") %> -->
                                    <div class="needle needle-co" style="-webkit-transform: rotate(-120deg)">
                                    </div>
                                </div>
                                <div class="chart-section">
                                    <div class="chart-range-ppm">
                                        <span class="chart-range">
                                            <!-- Dynamic -->
                                            <!-- <%= ranges.co.to_f.round(1) %> -->
                                        </span> <span class="ppm"> ppm</span>
                                    </div>
                                    <span class="chart-type">Carbon Monoxide</span>
                                    <div class="ranges">
                                        <span class="acceptable-range">Acceptable Range</span>
                                        <span class="range-window">Less than 6 ppm</span>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </table>

                    <table class="why-it-matters">
                        <tr>
                            <td class="summary">
                                <div class="title-wrap">
                                    <div class="title">
                                        Odors & Smells
                                    </div>
                                    <div class="status-wrap">
                                        <img src="images/pdfs/good-icon.png" class="control-icon" />
                                        <!-- <%= public_send(image_tag_type, "pdfs/#{range_value}-icon.png" ,alt:range_value,
                                            class:"control-icon") %> -->
                                        <span class="good-status">
                                            GOOD
                                            <!-- <%= range_value.humanize.upcase %> -->
                                        </span>
                                    </div>
                                </div>
                                <div class="description">
                                    No doubt about it, every house smells. Some smells are good and some not
                                    so good, but everyone notices smells differently. Odors and smells come
                                    from the things we bring in to the home, as well as human generated
                                    activities. Like many things, prolonged exposure to the chemicals that make
                                    up these noticeable odors and smells can impact your comfort and health. Sometimes
                                    even the good
                                    smelling products we use to cover up bad smells
                                    can become a source of irritation. Measured levels above 500 <span
                                        class="microgram">&mu;</span>g/m3
                                    indicates there is a potential control issue with removing odors and smells in
                                    your home.
                                </div>
                                <div class="bullet-header">
                                    Potential Causes:
                                </div>
                                <div class="bullet-content">
                                    <ul>
                                        <li>Air fresheners, fragrances, cleaning chemicals, candles, personal care
                                            products, etc.</li>
                                        <li>Activities such as cooking, smoking, and pets.</li>
                                        <li>Newly installed building materials, carpeting, freshly painted surfaces,
                                            plastics or furniture.
                                        </li>
                                    </ul>
                                </div>
                            </td>
                            <td class="dial-column">
                                <div class="dial">
                                    <img src="images/pdfs/odors-and-smells.png" alt="odors and smells" />
                                    <!-- <%= public_send(image_tag_type, "pdfs/odors-and-smells.png" , alt:"odors and smells
                                        meter") %> -->
                                    <div class="needle needle-odor" style="-webkit-transform: rotate(-110deg)">
                                    </div>
                                </div>
                                <div class="chart-section" style="margin-top: -70px;">
                                    <div class="chart-range-ppm">
                                        <span class="chart-range">
                                            <!-- Dynamic Here -->
                                            <!-- <%= ranges.display_range(:voc) %> -->
                                        </span> <span class="ppm"> &mu;g/m3</span>
                                    </div>
                                    <span class="chart-type">Odors & Smells</span>
                                    <div class="ranges">
                                        <span class="acceptable-range">Acceptable Range</span>
                                        <span class="range-window">Less than 500 &mu;g/m3</span>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </table>

                    <table class="why-it-matters">
                        <tr>
                            <td class="summary">
                                <div class="title-wrap">
                                    <div class="title">
                                        Relative Humidity
                                    </div>
                                    <div class="status-wrap">
                                        <img src="images/pdfs/good-icon.png" class="control-icon">
                                        <!-- <%= public_send(image_tag_type, "pdfs/#{range_value}-icon.png"
                                            ,height:"auto",width:"18px",alt:range_value) %> -->
                                        <span class="good-status">
                                            GOOD
                                            <!-- <%= range_value.humanize.upcase %> -->
                                        </span>
                                    </div>
                                </div>
                                <div class="description">
                                    The way you feel the air around you has a lot to do with the amount of water
                                    in the air. Too little moisture and you feel dry and too much moisture and
                                    you feel sticky. Your home feels the moisture in the air too. Too little can
                                    cause structural damage and too much can lead to mold growth. Weather
                                    and temperature determine how much water is in the air. According to
                                    ASHRAE (American Society of Heating, Refrigeration, and Air Conditioning
                                    Engineers) your home needs to be able to control relative humidity between
                                    the range of 35% to 55%.
                                </div>
                                <div class="bullet-header">
                                    Potential Causes:
                                </div>
                                <div class="bullet-content">
                                    <ul>
                                        <li>
                                            Weather and seasonal issues: seasonal changes often bring big swings in
                                            relative humidity and
                                            indicates your home isn't keeping up adequately.
                                        </li>
                                        <li>
                                            Possible heating and cooling issues: no or inadequate humidification or
                                            dehumidification, poor
                                            ventilation, improperly sized heating or cooling system.
                                        </li>
                                        <li>
                                            Structural issues: standing water, leaky pipes or faucets.
                                        </li>
                                    </ul>
                                </div>
                            </td>
                            <td class="dial-column">
                                <div class="dial">
                                    <img src="images/pdfs/relative-humidity.png" />
                                    <!-- <%= public_send(image_tag_type, "pdfs/relative-humidity.png" , alt:"relative
                                        humidity meter") %> -->
                                    <div class="needle needle-humi" style="-webkit-transform: rotate(-35deg)"></div>
                                </div>
                                <div class="chart-section">
                                    <div class="chart-range-ppm">
                                        <span class="chart-range">
                                            <!-- Dynamic Numbers -->
                                            <!-- <%= ranges.humi.to_f.round(1) %> -->
                                        </span> <span class="ppm"> %</span>
                                    </div>
                                    <span class="chart-type">Relative Humidity</span>
                                    <div class="ranges">
                                        <span class="acceptable-range">Acceptable Range</span>
                                        <span class="range-window">Between 35% - 55% </span>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </table>

                    <table class="why-it-matters carbon-dioxide">
                        <tr>
                            <td class="summary">
                                <div class="title-wrap">
                                    <div class="title">
                                        Carbon Dioxide
                                    </div>
                                    <div class="status-wrap">
                                        <img src="images/pdfs/good-icon.png" class="control-icon" />
                                        <!-- <%= public_send(image_tag_type, "pdfs/#{range_value}-icon.png" , alt:range_value,
                                            class: "control-icon" ) %> -->
                                        <span class="good-status">
                                            GOOD
                                            <!-- <%= range_value.humanize.upcase %> -->
                                        </span>
                                    </div>
                                </div>
                                <div class="description">
                                    Just like you, your house has to breathe. Humans breathe in oxygen (O2)
                                    and exhale carbon dioxide (CO2). With human activity, your house needs to
                                    have adequate ventilation to remove CO2 and when it can't, levels rise. CO2
                                    above 750 ppm indicates that ventilation is a control concern in the home. CO2 is
                                    naturally present in
                                    the atmosphere at about 400 ppm. Lack of fresh
                                    air (no ventilation), malfunctioning ventilation, ventilation has been blocked
                                    or turned off.
                                </div>
                                <div class="bullet-header">
                                    Potential Causes:
                                </div>
                                <div class="bullet-content">
                                    <ul>
                                        <li>Lack of fresh air (no ventilation), malfunctioning ventilation, ventilation
                                            has been blocked or
                                            turned off.</li>
                                        <li>'Tight' (well weatherized and energy-efficient) home construction without
                                            adequate ventilation.
                                        </li>
                                        <li>Common human & household activity: breathing, burning candles, natural gas
                                            or wood burning
                                            fireplace.</li>
                                        <li>Appliances that have a natural gas pilot such as a stove, hot water heater,
                                            or furnace.</li>
                                    </ul>
                                </div>
                            </td>
                            <td class="dial-column">
                                <div class="dial">
                                    <img src="images/pdfs/carbon-dioxide.png" />
                                    <!-- <%= public_send(image_tag_type, "pdfs/carbon-dioxide.png" , alt:"carbon monoxide
                                        meter") %> -->
                                    <div class="needle needle-co2" style="-webkit-transform: rotate(-48deg)">
                                    </div>
                                </div>
                                <div class="chart-section">
                                    <div class="chart-range-ppm">
                                        <span class="chart-range">
                                            <!-- Dynamic Number -->
                                            <!-- <%= ranges.display_range(:co2) %> -->
                                        </span> <span class="ppm"> ppm</span>
                                    </div>
                                    <span class="chart-type">Carbon Dioxide</span>
                                    <div class="ranges">
                                        <span class="acceptable-range">Acceptable Range</span>
                                        <span class="range-window">Less than 750 ppm</span>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </table>

                    <table class="why-it-matters">
                        <tr>
                            <td class="summary">
                                <div class="title-wrap">
                                    <div class="title">
                                        Temperature
                                    </div>
                                    <div class="status-wrap">
                                        <img src="images/pdfs/marginal-icon.png" class="control-icon">
                                        <!-- <%= public_send(image_tag_type, "pdfs/#{range_value}-icon.png" ,alt:range_value,
                                            class:"control-icon") %> -->
                                        <span class="marginal-status">
                                            MARGINAL
                                            <!-- <%= range_value.humanize.upcase %> -->
                                        </span>
                                    </div>
                                </div>
                                <div class="description">
                                    The job of your HVAC (Heating, Ventilation, Air Conditioning) system is to
                                    move fresh air around your home at the temperature you want in any
                                    season. The temperature in your home is an indication of your current HVAC
                                    system's ability to respond to changes in the outdoor air temperature. Temperatures
                                    are most comfortable
                                    when steady, with fluctuations less than
                                    2-3 degrees. Ideally, temperature should be consistent throughout the home.
                                    Comfortable temperatures
                                    fall within the range of 68 to 75 degrees F.
                                </div>
                                <div class="bullet-header">
                                    Potential Causes:
                                </div>
                                <div class="bullet-content">
                                    <ul>
                                        <li>
                                            Ineffective thermostat control: a poorly located thermostat or lengthy
                                            distance from thermostat
                                            to farthest rooms in the house.
                                        </li>
                                        <li>
                                            Ductwork issues: leaky, imbalanced or improperly sized ductwork limits the
                                            airflow you need to
                                            reach all areas of your home.
                                        </li>
                                        <li>
                                            Possible HVAC issues: fan blower motor type, undersized or oversized furnace
                                            or AC.
                                        </li>
                                        <li>
                                            Structural causes: poor insulation, inadequate weatherization like poorly
                                            sealed windows and
                                            doors, and rising heat or falling cool air in multi-level homes.
                                        </li>
                                    </ul>
                                </div>
                            </td>
                            <td class="dial-column">
                                <div class="temp-dial dial">
                                    <img src="images/pdfs/temperature.png" />
                                    <!-- <%= public_send(image_tag_type, "pdfs/temperature.png" , alt:"temperature meter") %> -->
                                    <div class="needle needle-temp" style="-webkit-transform: rotate(-16deg)">
                                    </div>
                                </div>
                                <div class="chart-section">
                                    <div class="chart-range-ppm">
                                        <span class="chart-range">
                                            <!-- Dynamic Numbers -->
                                            <!-- <%= ranges.temp.to_f.round(1) %> -->
                                        </span> <span class="temp"> &deg; F</span>
                                    </div>
                                    <span class="chart-type">Temperature</span>
                                    <div class="ranges">
                                        <span class="acceptable-range">Acceptable Range</span>
                                        <span class="range-window">Between 68&deg; - 75&deg; F</span>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </table>

                    <table class="why-it-matters">
                        <tr>
                            <td class="summary">

                                <div class="title-wrap">
                                    <div class="title">
                                        Particles
                                    </div>
                                    <div class="status-wrap">
                                        <img src="images/pdfs/needs_attention-icon.png" class="control-icon" />
                                        <!-- <%= public_send(image_tag_type, "pdfs/#{range_value}-icon.png" ,alt:range_value,
                                            class: "control-icon" ) %> -->
                                        <span class="needs_attention-status">
                                            NEEDS ATTENTION
                                            <!-- <%= range_value.humanize.upcase %> -->
                                        </span>
                                    </div>
                                </div>

                                <div class="description">
                                    While we often can't see them, the outside air carries with it many small
                                    particles that change daily and with the seasons. When outside air gets in, your
                                    home acts as a giant
                                    filter and traps these particles in your home. Measured levels above 10 <span
                                        class="microgram">&mu;</span>g/m3 indicates there is a potential control issue
                                    with removing
                                    particles from the air in your home. Excessive airborne
                                    particles can shorten the life of furnace igniters, burners, and the fan motor. At
                                    elevated levels above
                                    the control point, these particles can become
                                    noticeable to you and your guests.
                                </div>
                                <div class="bullet-header">
                                    Potential Causes:
                                </div>
                                <div class="bullet-content">
                                    <ul>
                                        <li>
                                            Outside elements such as dirt, dust, pollen, pollution, and soot
                                        </li>
                                        <li>
                                            Inside elements such as human and pet dander, fireplace ash and soot, smoke
                                            particles from
                                            burning cigarettes or candles.
                                        </li>
                                        <li>
                                            Leaks in heating and cooling ductwork.
                                        </li>
                                    </ul>
                                </div>

                            </td>
                            <td class="dial-column">

                                <div class="dial">
                                    <img src="images/pdfs/particles.png" />
                                    <!-- <%= public_send(image_tag_type, "pdfs/particles.png" , alt:"particles meter") %> -->
                                    <div class="needle needle-particle" style="-webkit-transform: rotate(0deg)"></div>
                                </div>
                                <div class="chart-section">
                                    <div class="chart-range-ppm">
                                        <span class="chart-range">
                                            <!-- Dynamic Number -->
                                            <!-- <%= ranges.display_range(:pm) %> -->
                                        </span> <span class="ppm"> &mu;g/m3</span>
                                    </div>
                                    <span class="chart-type">Particles</span>
                                    <div class="ranges">
                                        <span class="acceptable-range">Acceptable Range</span>
                                        <span class="range-window">Less than 10 &mu;g/m3</span>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </table>

                </div>
            </div>
        </div>
    </body>

</html>`;

module.exports = { html };
