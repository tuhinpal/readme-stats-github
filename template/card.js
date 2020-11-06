async function main(name, pic, repo, stars, commits, forks, tis, cis, text_color, card_color, icon_color, followers) {

    var card = `<svg width="495" height="195" viewBox="0 0 495 195" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <style>
        .leftdiv {
            animation: fadeH 0.7s ease-in-out forwards;
        }

        .text {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            fill: #${text_color};
            font-size: 14px;
        }

        .singleitem {
            opacity: 0;
            animation: fade 0.3s ease-in-out forwards;
        }

        .followers {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            fill: #${text_color};
            font-size: 12px;
        }

        .namepl {
            font-family: Arial, Helvetica, sans-serif;
            fill: #${text_color};
            font-size: 17px;
            font-weight: 600;
            alignment-baseline: middle;
            text-anchor: middle;
        }

        .icon {
            fill: #${icon_color};
            display: block;
        }


        @keyframes fade {
            from {
                opacity: .5;
            }

            to {
                opacity: 1;
            }
        }

        @keyframes fadeH {
            from {
                opacity: 0;
                transform: translate(-90px, 10px);
            }

            to {
                opacity: 1;
                transform: translate(10px, 10px);
            }
        }
    </style>
    <rect x="0.5" y="0.5" rx="4.5" height="99%" width="494" fill="#${card_color}" stroke="#7e7979" stroke-opacity="1" />

    <g transform="translate(0, 25)">


        <g class="leftdiv">

        <defs>
        <pattern id="image" x="0%" y="0%" height="100%" width="100%" viewBox="0 0 512 512">
            <image x="0%" y="0%" width="512" height="512"
                xlink:href="data:image/png;base64,${pic}">
            </image>
        </pattern>
    </defs>
    <circle cx="86" cy="44" r="40" stroke="#${card_color}" stroke-width="3" fill="url(#image)" />
        <text x="86" y="100" class="namepl">${name}</text>
        <svg x="35" y="111.8" class="icon" viewBox="0 0 16 16" version="1.1" width="14" height="14">
            <path fill-rule="evenodd"
                d="M5.5 3.5a2 2 0 100 4 2 2 0 000-4zM2 5.5a3.5 3.5 0 115.898 2.549 5.507 5.507 0 013.034 4.084.75.75 0 11-1.482.235 4.001 4.001 0 00-7.9 0 .75.75 0 01-1.482-.236A5.507 5.507 0 013.102 8.05 3.49 3.49 0 012 5.5zM11 4a.75.75 0 100 1.5 1.5 1.5 0 01.666 2.844.75.75 0 00-.416.672v.352a.75.75 0 00.574.73c1.2.289 2.162 1.2 2.522 2.372a.75.75 0 101.434-.44 5.01 5.01 0 00-2.56-3.012A3 3 0 0011 4z" />
        </svg>

        <text x="55" y="123" class="followers">Followers:</text>
        <text x="114" y="124" style="font-weight: 700" class="followers">${followers}</text>

        </g>

        <svg>
            <g transform="translate(230, 0)">
                <g class="singleitem" style="animation-delay: 210ms" transform="translate(25, 0)">

                    <svg class="icon" viewBox="0 0 16 16" version="1.1" width="16" height="16">
                        <path fill-rule="evenodd"
                            d="M0 1.75A.75.75 0 01.75 1h4.253c1.227 0 2.317.59 3 1.501A3.744 3.744 0 0111.006 1h4.245a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75h-4.507a2.25 2.25 0 00-1.591.659l-.622.621a.75.75 0 01-1.06 0l-.622-.621A2.25 2.25 0 005.258 13H.75a.75.75 0 01-.75-.75V1.75zm8.755 3a2.25 2.25 0 012.25-2.25H14.5v9h-3.757c-.71 0-1.4.201-1.992.572l.004-7.322zm-1.504 7.324l.004-5.073-.002-2.253A2.25 2.25 0 005.003 2.5H1.5v9h3.757a3.75 3.75 0 011.994.574z" />
                    </svg>

                    <text class="text" x="25" y="12.5">Total Repo:</text>
                    <text class="text" style="font-weight: 700" x="150" y="12.5">${repo}</text>
                </g>
            </g>

            <g transform="translate(230, 25)">
                <g class="singleitem" style="animation-delay: 350ms" transform="translate(25, 0)">

                    <svg class="icon" viewBox="0 0 16 16" version="1.1" width="16" height="16">
                        <path fill-rule="evenodd"
                            d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z" />
                    </svg>

                    <text class="text" x="25" y="12.5">Star's Count:</text>
                    <text class="text" style="font-weight: 700" x="150" y="12.5">${stars}</text>
                </g>
            </g>

            <g transform="translate(230, 50)">
                <g class="singleitem" style="animation-delay: 460ms" transform="translate(25, 0)">

                    <svg class="icon" viewBox="0 0 16 16" version="1.1" width="16" height="16">
                        <path fill-rule="evenodd"
                            d="M1.643 3.143L.427 1.927A.25.25 0 000 2.104V5.75c0 .138.112.25.25.25h3.646a.25.25 0 00.177-.427L2.715 4.215a6.5 6.5 0 11-1.18 4.458.75.75 0 10-1.493.154 8.001 8.001 0 101.6-5.684zM7.75 4a.75.75 0 01.75.75v2.992l2.028.812a.75.75 0 01-.557 1.392l-2.5-1A.75.75 0 017 8.25v-3.5A.75.75 0 017.75 4z" />
                    </svg>

                    <text class="text" x="25" y="12.5">Commit's Count:</text>
                    <text class="text" style="font-weight: 700" x="150" y="12.5">${commits}</text>
                </g>
            </g>

            <g transform="translate(230, 75)">
                <g class="singleitem" style="animation-delay: 560ms" transform="translate(25, 0)">

                    <svg class="icon" viewBox="0 0 16 16" version="1.1" width="16" height="16">
                        <path fill-rule="evenodd"
                            d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                    </svg>

                    <text class="text" x="25" y="12.5">Fork's Count:</text>
                    <text class="text" style="font-weight: 700" x="150" y="12.5">${forks}</text>
                </g>
            </g>

            <g transform="translate(230, 100)">
                <g class="singleitem" style="animation-delay: 660ms" transform="translate(25, 0)">

                    <svg class="icon" viewBox="0 0 16 16" version="1.1" width="16" height="16">
                        <path fill-rule="evenodd"
                            d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zm-.25-6.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z" />
                    </svg>

                    <text class="text" x="25" y="12.5">Total Issues:</text>
                    <text class="text" style="font-weight: 700" x="150" y="12.5">${tis}</text>
                </g>
            </g>

            <g transform="translate(230, 125)">
                <g class="singleitem" style="animation-delay: 760ms" transform="translate(25, 0)">

                    <svg class="icon" viewBox="0 0 16 16" version="1.1" width="16" height="16">
                        <path fill-rule="evenodd"
                            d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" />
                    </svg>

                    <text class="text" x="25" y="12.5">Closed Issues:</text>
                    <text class="text" style="font-weight: 700" x="150" y="12.5">${cis}</text>
                </g>
            </g>

        </svg>
    </g>
</svg>`

    return card
}

module.exports = {
    main
};