<script setup></script>
<template>
    <div>
        <div id="loading-body">
            <div id="loader">
                <div class="line-scale-pulse-out">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <label for="">{{ $t("loading") }}</label>
        </div>
    </div>
</template>
  
<style scoped>
#loading-body {
    display: flex;
    width: 100%;
    padding-top: 200px;
    padding-bottom: 100px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-image: linear-gradient(#ffffff, #ffffff00);
}

#loader {
    display: table-cell;
    text-align: center;
    vertical-align: middle;
    margin-bottom: 30px;
}

.line-scale-pulse-out>div {
    background-color: #3AC07C;
    width: 4px;
    height: 35px;
    border-radius: 2px;
    margin: 4px;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    display: inline-block;
    -webkit-animation: line-scale-pulse-out 0.9s -0.6s infinite cubic-bezier(0.85, 0.25, 0.37, 0.85);
    animation: line-scale-pulse-out 0.9s -0.6s infinite cubic-bezier(0.85, 0.25, 0.37, 0.85);
}

.line-scale-pulse-out>div:nth-child(2),
.line-scale-pulse-out>div:nth-child(4) {
    -webkit-animation-delay: -0.4s !important;
    animation-delay: -0.4s !important;
}

.line-scale-pulse-out>div:nth-child(1),
.line-scale-pulse-out>div:nth-child(5) {
    -webkit-animation-delay: -0.2s !important;
    animation-delay: -0.2s !important;
}

@-webkit-keyframes line-scale-pulse-out {
    0% {
        -webkit-transform: scaley(1);
        transform: scaley(1);
    }

    50% {
        -webkit-transform: scaley(0.4);
        transform: scaley(0.4);
    }

    100% {
        -webkit-transform: scaley(1);
        transform: scaley(1);
    }
}

@keyframes line-scale-pulse-out {
    0% {
        -webkit-transform: scaley(1);
        transform: scaley(1);
    }

    50% {
        -webkit-transform: scaley(0.4);
        transform: scaley(0.4);
    }

    100% {
        -webkit-transform: scaley(1);
        transform: scaley(1);
    }
}
</style>