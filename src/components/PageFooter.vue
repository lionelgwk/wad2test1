<template>
    <div class="container-fluid">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 mt-4 border-top">
            <div class="col-md-4 d-flex align-items-center">
                <router-link :to="{ name: 'home'}"><img width="24" height="24" src="https://cdn-icons-png.flaticon.com/512/1161/1161670.png"></router-link>
                <span class="mb-3 mb-md-0 text-muted">&nbsp;© 2022 Partygoers Inc.</span>
            </div>

            <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li class="ms-3"><a class="text-muted" href="#"><img width="30" src="https://cdn-icons-png.flaticon.com/512/3128/3128212.png"></a></li>
                <li class="ms-3"><a class="text-muted" href="#"><img width="23" src="https://cdn-icons-png.flaticon.com/512/20/20837.png"></a></li>
                <li class="ms-3"><a class="text-muted" href="#"><img width="23" src="https://cdn-icons-png.flaticon.com/512/1384/1384031.png"></a></li>
            </ul>
        </footer>
    </div>
</template>

<script>



</script>

<style>

    footer {
        width: 100%;
        padding-right: 30px;
        z-index: 998;
        font-family: 'Varela Round', sans-serif;
    }

</style>