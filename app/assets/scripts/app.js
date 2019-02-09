import MobileMenu from "./modules/mobile_menu";
import revealOnScroll from "./modules/revealOnScroll";
import StickyHeader from "./modules/StickyHeader";
import $ from "jquery";


var mobileMenu = new MobileMenu();
new revealOnScroll($(".feature-item"), "85%");
new revealOnScroll($(".testimonial"), "60%");
var stickyHeader = new StickyHeader();