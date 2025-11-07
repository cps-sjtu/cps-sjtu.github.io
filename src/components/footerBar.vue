<template>
  <div class="footer">
    <div class="ref">
      This page's design was inspired in part by
      <a
        href="https://github.com/eliahuhorwitz/Academic-project-page-template"
        target="_blank"
        rel="noopener"
      >
        Eliahu Horwitz's Academic project page template
      </a>
      .
    </div>
  </div>
</template>

<style lang="css" scoped>
.footer {
  height: 4rem;
  padding: 1rem 2rem;
  font-size: 0.9rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--primary-light-color);
  /* background-color: var(--background-color-tertiary); */
}

.footer .ref a {
  color: var(--font-color-primary);
  text-decoration: none;
  max-width: 100%;
  font-weight: 600;
}
</style>
