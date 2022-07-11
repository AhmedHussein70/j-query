$("section").animate({ width: "100%" }, 1000);
$("section").animate({ height: "100vh" }, 1000, () => {
  $("section h2").slideDown(1000, () => {
    $(".child")
      .eq(0)
      .slideDown(1000, () => {
        $(".child").eq(1).fadeIn(1000,()=>{
          $(".child").eq(2).show(1000)
        });
      });
  });
});
