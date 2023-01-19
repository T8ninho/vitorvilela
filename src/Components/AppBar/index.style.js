import styled from "styled-components";

export const Container = styled.div`
    
    font-family: "Poppins", sans-serif;
    position: fixed;
    translate: 0;
    width: 100%;
    background: rgba(255,255,255,0.027);
    box-shadow: 0 8px 32px 0 rgba(14,19,82,037);
    backdrop-filter: blur(5px);
    translate: -5px;
    .top {
        position: initial;
    }

    .container {
    max-width: 960px;
    margin: 0 auto;
    padding: 15px;
}
.navbar {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding-block: 15px;
}
.navbar a {
    text-decoration: none;
    color: #fff;
}
.logo {
    margin-right: 50px;
}

.logo img {
    width: 65px;
    border-radius:7px;
    
}
.logo {
    border-radius:7px;
    transition: 
        translate 0.25s,
        box-shadow 0.25s;
}
.logo:hover {
    translate: 0 -5px;
}
.list {
    list-style: none;
    display: flex;
    gap: 25px;
}
#toggler {
    display: none;
}
.link {
	position: relative;
	display: inline-block;
    font-weight: bold;
}

.link::before {
	content: '';
	position: absolute;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 2px;
	background-color: #fff;
	border-radius: 4px;
	scale: 0 1;
	transform-origin: right;
	transition: scale 0.25s;
}
.link:hover::before {
	scale: 1;
	transform-origin: left;
}
.linkActived {
	position: relative;
	display: inline-block;
    font-weight: bold;
}

.linkActived::before {
	content: '';
	position: absolute;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 2px;
	background-color: #fff;
	border-radius: 4px;
	scale: 0 1;
	transform-origin: right;
	transition: scale 0.25s;
    scale: 1;
	transform-origin: left;
}
@media screen and (max-width: 600px) {
    .menu {
        width: 100%;
        max-height: 0;
        overflow: hidden;
    }
    .list {
        flex-direction: column;
        align-items: center;
        padding: 20px;
    }
    .navbar label {
        display: inline-flex;
        align-items: center;
        cursor: pointer;
    }
    .burger {
        width: 50px;
        height: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 7px;
        cursor: pointer;
    }
    .bun {
        display: block;
        background-color: #fff;
        height: 3px;
        width: 30px;
        transition: translate 0.2s 0.25s,
        rotate 0.2s;
    }
    #toggler:checked+.burger .bun {
        transition: translate 0.2s,
        rotate 0.2s 0.25s;
    }
    #toggler:checked+.burger .bun--toptp {
        rotate: 45deg;
        translate: 0 15px;
    }
    #toggler:checked+.burger .bun--top {
        rotate: 45deg;
        translate: 0 5px;
    }
    #toggler:checked+.burger .bun--bottom {
        rotate: -45deg;
        translate: 0 -5px;
    }
    #toggler:checked ~ .menu {
        max-height: 100%;
    }
    .logo img {
        width: 65px;
    border-radius:7px;
    }
}

`