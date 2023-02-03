import { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { update, nextRenderNews } from "../../store/news";

export default function NewStory(UIComponent, props) {
	const listNews = useSelector((state) => state.news.listEntityNews);
	const [spinRefreshAnimation, setSpinRefreshAnimation] = useState(false);
	const [showSkeletonBottom, setshowSkeletonBottom] = useState(false);
	const dispatch = useDispatch();

	const loadListNews = useCallback(async () => {
		const fullAnimationSpinFor = async (func) => {
			setSpinRefreshAnimation(true);
			const startTime = Date.now();
			await func();
			const endTime = Date.now();
			const differentTime = endTime - startTime;
			setTimeout(() => {
				setSpinRefreshAnimation(false);
			}, 1000 - (differentTime % 1000));
		};
		const updateNews = async () => {
			await dispatch(update());
		};

		fullAnimationSpinFor(updateNews);
	}, []);

	useEffect(() => {
		// First boot
		dispatch(update());
		const idInterval = setInterval(() => {
			loadListNews();
		}, 1000 * 60 * 3);
		return () => clearInterval(idInterval);
	}, []);

	//EventScroll > load on scroll
	useEffect(() => {
		//do not ask :)
		function throttle(fn, ms) {
			let run = true;

			return (...prop) => {
				if (run) {
					fn(...prop);
					setTimeout(() => {
						run = true;
					}, ms);
					run = false;
				}
			};
		}

		const handlerTrigger = async () => {
			setshowSkeletonBottom(true);
			await dispatch(nextRenderNews());
			setshowSkeletonBottom(false);
		};

		const handlerScrollEvent = (fn) => {
			return () => {
				const offsetTriggerPx = 150;
				const endOfPage =
					window.innerHeight + window.pageYOffset >=
					document.body.offsetHeight - offsetTriggerPx;
				if (endOfPage) {
					fn();
				}
			};
		};
		const handlerScroll = handlerScrollEvent(throttle(handlerTrigger, 1000));
		document.addEventListener("scroll", handlerScroll);
		return () => document.removeEventListener("scroll", handlerScroll);
	}, []);

	const propsForUi = {
		reloadDataList: loadListNews,
		listNews,
		spinRefreshAnimation,
		showSkeletonBottom,
		...props,
	};
	return UIComponent(propsForUi);
}
