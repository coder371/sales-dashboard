import React,{useState} from 'react'
import { BsList } from "react-icons/bs";
import { Link } from 'react-router-dom';

// import asd  from './alert.mp3'


export function Header() {
    const [showSubMenu, setShowSubMenu] = useState(false);
    const [showOverlay, setShowOverlay] = useState(false);
    const [activeSubMenu, setActiveSubMenu] = useState([]);
    // const [userMenu, setUserMenuShow] = useState(false);
    const menu = [
        {
            title: 'الإحصائيات',
            icon: '/icon/analysis.png',
            path: '/'
        },{
            title: 'الطلبات',
            icon: '/icon/parcel-weight.png',
            path: '/',
            subMenu: [
                {
                    title: 'شباك الطلبات',
                    icon: '/icon/parcel-weight.png',
                    path: '/orders/panel',
                },
                {
                    title: 'جاري التجهيز',
                    icon: '/icon/parcel-weight.png',
                    path: '/orders/preparing',
                },
                {
                    title: 'جاري التوصيل',
                    icon: '/icon/parcel-weight.png',
                    path: '/orders/indelivery',
                },
                {
                    title: 'عرض كل الطلبات',
                    icon: '/icon/parcel-weight.png',
                    path: '/orders',
                },
            ]
        },{
            title: 'المنتجات',
            icon: '/icon/products.png',
            path: '/products',
            subMenu: [
                {
                    title: 'عرض المنتجات',
                    icon: '/icon/products.png',
                    path: '/products',
                },{
                    title: 'اضافة منتج جديد',
                    icon: '/icon/products.png',
                    path: '/products/insert',
                }
            ]
        },{
            title: 'الإضافات',
            icon: '/icon/nuts.png',
            path: '/extras',
            subMenu: [
                {
                    title: 'عرض الكل',
                    icon: '/icon/products.png',
                    path: '/extras',
                },
                {
                    title: 'اضافة جديد',
                    icon: '/icon/products.png',
                    path: '/extras/insert',
                }
            ]
        },{
            title: 'الأقسام',
            icon: '/icon/ice-cream-shop.png',
            path: '/categories',
            subMenu: [
                {
                    title: 'عرض الكل',
                    icon: '/icon/ice-cream-shop.png',
                    path: '/categories',
                },
                {
                    title: 'اضافة جديد',
                    icon: '/icon/ice-cream-shop.png',
                    path: '/categories/insert',
                }
            ]
        },{
            title: 'الدعاية',
            icon: '/icon/megaphone.png',
            path: '/',
            subMenu: [
                {
                    title: 'عرض الإعلانات الكل',
                    icon: '/icon/megaphone.png',
                    path: '/advertisements',
                },
                {
                    title: 'اضافة إعلان جديد',
                    icon: '/icon/megaphone.png',
                    path: '/advertisements/insert',
                },
                {
                    title: 'الإشعارات',
                    icon: '/icon/notification.png',
                    path: '/advertisements/notification',
                }
            ]
        },{
            title: 'الإعدادات',
            icon: '/icon/settings.png',
            path: '/settings'
        },
    ]

    const subMenuToggle = (items) => {
        setActiveSubMenu(items)
        setShowOverlay(true);
        setShowSubMenu(true);
    }
    const closeEvryThing = () => {
        setShowOverlay(false);
        setShowSubMenu(false);
    }
  return (
    <>
    <div className="navFixed">
        <div className="main-header">
            <div className="logo">
                <Link href="/">
                    <img src="/vite.svg" alt=""/>
                </Link>
            </div>
            {/* <button onClick={play}>Click me!</button> */}

            <div className="navToggle" onClick={() =>{this.toggleSide()}}>
                <label htmlFor="check" className="checkbtn">
                    <BsList/>
                </label>
            </div>
            <div className="mAuto"></div>
            <div className="header-part-right">
                {/* <Badge badgeContent={4} color="primary">
                    <MailOutline color="action" />
                </Badge> */}
                {/* <div className="user col align-self-end" onClick={() => setUserMenuShow(!userMenu)}>
                    <div className="userContnet" data-toggle="dropdown"  aria-haspopup="true" aria-expanded="false" id="userDropdown">
                        <div className="username" >{fullname}</div>
                        <Avatar src={avatar}  alt=""/>
                    </div>
                    {userMenu ?
                    <div className="dropdown-menu userDropMenu dropdown-menu-right text-right" style={{display:'block'}} aria-labelledby="userDropdown">
                        <button className="dropdown-item" onClick={() => signOut()}> تسجيل الخروج</button>
                    </div> : null}
                </div> */}
            </div>
        </div>
    </div>

    <div className="sideBar rightMenu">
        <div className="side-content-wrap">
            <div className="sidebar-left open rtl-ps-none" data-perfect-scrollbar="" data-suppress-scroll-x="true">
                <ul className="navigation-left">
                    {menu.map((item, index) => {
                        return (
                            <li className="nav-item" key={index}>
                                <Link
                                    className="nav-item-hold" 
                                    href={item.subMenu ? 'javascript:void(0)' : item.path} 
                                    onClick={item.subMenu ? () => subMenuToggle(item.subMenu) : null}
                                    >
                                    <div>
                                        <img src={item.icon} className='icon' />
                                    </div>
                                    <span className="nav-text">{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                    

                    {/* <li className="nav-item" >
                        <a className="nav-item-hold" onClick={() => {this.state.open === 1 ? this.setState({open:0}) : this.setState({open:1}) }}>
                            <FcConferenceCall/>
                            <span className="nav-text">المنتجات</span>
                        </a>
                    </li> */}
                </ul>
            </div>

                 {showSubMenu ?
                    <div className="sidebar-left-secondary rtl-ps-none open" data-perfect-scrollbar="" data-suppress-scroll-x="true" id="siteInfo">
                        <ul className="childNav" data-parent="products">
                            {activeSubMenu.map((subItem, index) => {
                                return (
                                    <li className="nav-item" key={index}>
                                        <Link href={subItem.path}>
                                            <div>
                                                <img src={subItem.icon} className='iconXs' />
                                            </div>
                                            <span className="item-name">{subItem.title}</span>
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div> 
                : null}
                {showOverlay ?
                    <div className="sidebar-overlay" onClick={closeEvryThing}></div>
                : null}

        </div>
    </div>
</>
  )
}
