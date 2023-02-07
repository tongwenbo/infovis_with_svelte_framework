<script>
    export const name = "Wenbo Tong";
    export const assignment_number = "1";

    import condition_data from "./assets/condition_data.json";
    import BarChart from "./lib/GroupBar.svelte";

    import cause_data from "./assets/cause_data.json"
    import Lollipop from "./lib/Lollipop.svelte";
    import Lollipop_again from "./lib/Lollipop_again.svelte";

    import PieChart from "./lib/PieChart.svelte";

    import roadtype_data from "./assets/roadtype_data.json";
    import FirstBar from "./lib/BarChart.svelte";

</script>

{#each roadtype_data as bar}
  <FirstBar data={bar}/>
{/each}

{#each cause_data as lollipop}
  <Lollipop data={lollipop}/>
{/each}

{#each condition_data as bar}
  <BarChart data={bar}/>
{/each}

<PieChart/>

{#each cause_data as lollipop}
  <Lollipop_again data={lollipop}/>
{/each}
