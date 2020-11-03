<template>
	<div class="main-sidebar">
		<h1 class="text-center mr-bottom-gap">Chuchenko Denis Alexandrovich</h1>
		<div class="photo-wrapper">
			<img src="@/assets/img/face.jpg" class="photo shadow mr-auto" />
		</div>
        <h2 class="mr-bottom-gap text-center">personal information</h2>
        <ol class="list own-counter">
            <li class="own-counter-item">
                Nationality: Ukraine
            </li>
            <li class="own-counter-item">
                Place of residence: Zaporizhzhia
            <li class="own-counter-item">
                Education: higher
            </li>
            <li class="own-counter-item">
                Date of birth: 26.02.1991
            </li>
            <li class="own-counter-item">
                Gender: male
            </li>
             <li class="own-counter-item">
               marital status: unmarried
            </li>
        </ol>
	</div>
</template>

<script>
export default {
  name: 'MainSidebar',
}
</script>

<style scoped lang="scss">
    @import '../assets/scss/variables';

	.list {
        max-width: 500px;
        text-align: justify;

        padding: 0;
        margin: 40px auto;
	}

	.photo-wrapper {
        padding: 15px 15px 35px;
	}

	.photo {
		max-width: 80%;
		object-fit: cover;
	}

    .own-counter {
        list-style: none;
    }

    .own-counter-item {
        display: flex;
        counter-increment: list;
        position: relative;

        & + & {
            margin-top: 25px;
        }

        &:before {
            content: counter(list);
            background: $gradient;
            border-radius: 0 50% 50% 50%;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            margin-right: 10px;
            margin-top: -10px;
            flex-shrink: 0;
            width: 40px;
            height: 40px;

            z-index: 1;
            color: #fff;
        }

        &:after {
            width: 2.5rem;
            height: 2.5rem;
            position: absolute;
            top: 0;
            left: 0;
            content: "";
            background: var(--highlight1);
            z-index: -1;
            border-top-left-radius: 3px;

        }
    }
</style>
