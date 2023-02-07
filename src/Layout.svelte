<script>
    import App from "./App.svelte";
    let name;
    let assignment_number;
    let student_number = "st177239";
</script>

<nav>
    <img src="/favicon.png" alt="logo" id="logo"  />
    <span>
        <b>PCIV</b> Assignment: {assignment_number}
    </span>
    <span class="divider" />
    <span>
        {name}<br>{student_number}
    </span>
</nav>

<App bind:name bind:assignment_number />