import { Fragment, createContext, useContext, useState, useRef, useEffect, useLayoutEffect, useMemo, type Dispatch, type FormEvent, type SetStateAction } from "react";
import {
  LayoutDashboard,
  BookOpen,
  ClipboardList,
  ShoppingCart,
  Users,
  MessageSquare,
  Settings,
  RefreshCw,
  Search,
  Heart,
  Bell,
  ChevronDown,
  ChevronsUpDown,
  Package,
  Building2,
  Plus,
  Filter,
  MoreHorizontal,
  ArrowUpRight,
  ArrowDownRight,
  CheckCircle2,
  Clock,
  AlertCircle,
  XCircle,
  Eye,
  Truck,
  Star,
  ChevronLeft,
  ChevronRight,
  Upload,
  Download,
  Trash2,
  Edit3,
  Phone,
  Mail,
  MapPin,
  Shield,
  CreditCard,
  User,
  Lock,
  Globe,
  Leaf,
  Minus,
  Syringe,
  X,
  Loader2,
  EyeOff,
  LogOut,
} from "lucide-react";

import img430 from "@/imports/ScriptlinkrxDashboard/9b6fa0a3b334659006bcf39e91b4da387a7b4cf0.png";
import img429 from "@/imports/ScriptlinkrxDashboard/5a66df92e25e912526cc119832b732deeacaa033.png";
import img431 from "@/imports/ScriptlinkrxDashboard/143a980412abcd77313d7193a14da8e48a539c1c.png";
import img432 from "@/imports/ScriptlinkrxDashboard/6c60baab03165ef8abab5f7207471c9c98cd8c6d.png";
import img433 from "@/imports/ScriptlinkrxDashboard/468b9aadf5afc5b0889fbadb2123d9b07618a907.png";
import img434 from "@/imports/ScriptlinkrxDashboard/92c24c340582162a18a98ce2172b6b88031eda43.png";
import img452dash from "@/imports/ScriptlinkrxDashboard/3208bf4564f5f1a2415d12b2e8ebf09c778bfcf1.png";
import img435 from "@/imports/ScriptlinkrxDashboard/928e96867c205b0e19e479ab55e64e7d8c644861.png";
import img436 from "@/imports/ScriptlinkrxDashboard/5f05b98bbd5f4366dde6987174a5ce7f9da06055.png";
import img437 from "@/imports/ScriptlinkrxDashboard/9acef17dd58ea5f905eacb97963e7153fb513dbc.png";
import img438 from "@/imports/ScriptlinkrxDashboard/105218643749a83b70d0b0c96a7e3dc7e0fc3f13.png";
import img439 from "@/imports/ScriptlinkrxDashboard/4594cb4d36df6eeef8a6896fc4f35a79e5091a7d.png";
import img440 from "@/imports/ScriptlinkrxDashboard/71b3a03610647f4c97f26448ddda3dbc36882006.png";
import imgPT141 from "@/imports/ScriptlinkrxProductPage/76629cbe854957543c2416420a71b8b9d0316bd3.png";
import imgAminoQuad from "@/assets/amino-quad.png";
import imgNadInjection from "@/assets/nad-injection.png";
import imgProduct452 from "@/imports/ScriptlinkrxProductPage/a7404d4186f9383142485474193c8c2ca1b2259c.png";
import scriptlinkrxLogo from "@/assets/scriptlinkrx-logo.svg";
import userVerifiedIcon from "@/assets/user-verified.svg";

type Page =
  | "dashboard"
  | "products"
  | "favorites"
  | "product-detail"
  | "pharmacies"
  | "orders"
  | "order-detail"
  | "support"
  | "users"
  | "settings"
  | "cart-single"
  | "cart-multi"
  | "checkout-prescription";

type CartMode = "single" | "multi";

const DEFAULT_PAGE: Page = "products";

type ProductFavoritesContextValue = {
  favoriteProductIds: Set<number>;
  setFavoriteProductIds: Dispatch<SetStateAction<Set<number>>>;
  favoriteProducts: CardDef[];
};

const ProductFavoritesContext = createContext<ProductFavoritesContextValue | null>(null);

function useProductFavorites() {
  const context = useContext(ProductFavoritesContext);
  if (!context) {
    return {
      favoriteProductIds: new Set<number>(),
      setFavoriteProductIds: (() => undefined) as Dispatch<SetStateAction<Set<number>>>,
      favoriteProducts: [],
    };
  }
  return context;
}

type CartSummaryContextValue = {
  cartItemCount: number;
  cartPreviewItems: CartPreviewItem[];
  addCartItems: (count?: number, product?: CartPreviewItem) => void;
  updateCartItemQty: (id: number, delta: number) => void;
  removeCartItem: (id: number) => void;
  clearCartItems: () => void;
};

type CartPreviewItem = {
  id: number;
  name: string;
  price: string;
  img: string;
  qty?: number;
};

type PatientCartEntry = {
  id: number;
  patientId: number;
  product: CardDef;
  qty: number;
  pharmacy: string;
  size: string;
  strength: string;
  injectionType: string;
  unitPrice: number;
};

const CartSummaryContext = createContext<CartSummaryContextValue | null>(null);

function useCartSummary() {
  const context = useContext(CartSummaryContext);
  if (!context) {
    return {
      cartItemCount: 0,
      cartPreviewItems: [],
      addCartItems: () => undefined,
      updateCartItemQty: () => undefined,
      removeCartItem: () => undefined,
      clearCartItems: () => undefined,
    };
  }
  return context;
}

type AppLoadingContextValue = {
  runWithAppLoader: (action: () => void, delayMs?: number) => void;
};

const AppLoadingContext = createContext<AppLoadingContextValue | null>(null);

function useAppLoading() {
  const context = useContext(AppLoadingContext);
  if (!context) {
    return { runWithAppLoader: (action: () => void) => action() };
  }
  return context;
}

// ─── Design System Primitives ────────────────────────────────────────────────

function Badge({
  children,
  variant = "default",
}: {
  children: React.ReactNode;
  variant?: "default" | "success" | "warning" | "error" | "info" | "neutral";
}) {
  const styles = {
    default: "bg-[#f0f0f0] text-[#1a1a1a]",
    success: "bg-[#d4f4e3] text-[#0a5c35]",
    warning: "bg-[#fef3c7] text-[#92400e]",
    error: "bg-[#fee2e2] text-[#991b1b]",
    info: "bg-[#dbeafe] text-[#1e40af]",
    neutral: "bg-[#f3f4f6] text-[#6b7280]",
  };
  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium ${styles[variant]}`}
    >
      {children}
    </span>
  );
}

function AppActionOverlay({ active }: { active: boolean }) {
  if (!active) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/65 backdrop-blur-[1px]" role="status" aria-live="polite" aria-label="Processing">
      <Loader2 size={42} className="animate-spin text-[#183229]" />
    </div>
  );
}

function StatusDot({ status }: { status: string }) {
  const colors: Record<string, string> = {
    Pending: "bg-amber-400",
    Processing: "bg-blue-400",
    Shipped: "bg-purple-400",
    Delivered: "bg-emerald-400",
    Cancelled: "bg-red-400",
    Active: "bg-emerald-400",
    Inactive: "bg-gray-300",
    Open: "bg-blue-400",
    Resolved: "bg-emerald-400",
    Urgent: "bg-red-400",
  };
  return (
    <span className={`inline-block w-1.5 h-1.5 rounded-full ${colors[status] ?? "bg-gray-400"}`} />
  );
}

function StatCard({
  label,
  value,
  delta,
  positive,
  icon: Icon,
  color,
}: {
  label: string;
  value: string;
  delta?: string;
  positive?: boolean;
  icon: React.ElementType;
  color: string;
}) {
  return (
    <div className="bg-card rounded-xl p-5 border border-[#eaeaea] flex flex-col gap-3">
      <div className="flex items-start justify-between">
        <span className="text-[13px] text-[#9d9d9d] font-medium">{label}</span>
        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${color}`}>
          <Icon size={15} className="text-white" />
        </div>
      </div>
      <div className="flex items-end justify-between">
        <span className="text-[26px] font-semibold text-[#1a1a1a] leading-none">{value}</span>
        {delta && (
          <span
            className={`flex items-center gap-0.5 text-[12px] font-medium ${positive ? "text-emerald-600" : "text-red-500"}`}
          >
            {positive ? <ArrowUpRight size={13} /> : <ArrowDownRight size={13} />}
            {delta}
          </span>
        )}
      </div>
    </div>
  );
}

// ─── Sidebar ─────────────────────────────────────────────────────────────────

type MenuItem = { icon: React.ElementType; label: string; page: Page };

const INITIAL_FAVORITES: MenuItem[] = [
  { icon: BookOpen, label: "Catalog", page: "products" },
  { icon: ClipboardList, label: "Orders", page: "orders" },
  { icon: ShoppingCart, label: "Cart", page: "cart-multi" },
];

const INITIAL_MAIN: MenuItem[] = [
  { icon: Users, label: "Patients", page: "users" },
  { icon: MessageSquare, label: "Support Tickets", page: "support" },
  { icon: Settings, label: "Settings", page: "settings" },
  { icon: RefreshCw, label: "Hard Refresh", page: "dashboard" },
  { icon: LayoutDashboard, label: "Dashboard", page: "dashboard" },
];

function NavItem({
  item,
  isPinned,
  isActive,
  section,
  hoveredItem,
  openMenu,
  dragItemRef,
  dragOverItemRef,
  onNavigate,
  onHover,
  onOpenMenu,
  onPin,
  onDrop,
}: {
  item: MenuItem;
  isPinned: boolean;
  isActive: boolean;
  section: "fav" | "main";
  hoveredItem: string | null;
  openMenu: string | null;
  dragItemRef: React.MutableRefObject<{ label: string; section: "fav" | "main" } | null>;
  dragOverItemRef: React.MutableRefObject<{ label: string; section: "fav" | "main" } | null>;
  onNavigate: (p: Page) => void;
  onHover: (label: string | null) => void;
  onOpenMenu: (label: string | null) => void;
  onPin: (item: MenuItem, isPinned: boolean) => void;
  onDrop: () => void;
}) {
  const { icon: Icon, label, page } = item;
  const isHovered = hoveredItem === label;
  const menuOpen = openMenu === label;
  const [isDragOver, setIsDragOver] = useState(false);

  return (
    <div
      className="relative"
      draggable
      onDragStart={() => { dragItemRef.current = { label, section }; }}
      onDragEnter={() => { dragOverItemRef.current = { label, section }; setIsDragOver(true); }}
      onDragLeave={() => setIsDragOver(false)}
      onDragOver={(e) => e.preventDefault()}
      onDrop={() => { setIsDragOver(false); onDrop(); }}
      onDragEnd={() => { dragItemRef.current = null; dragOverItemRef.current = null; setIsDragOver(false); }}
      onMouseEnter={() => onHover(label)}
      onMouseLeave={() => onHover(null)}
    >
      {isDragOver && (
        <div className="absolute inset-x-0 top-0 h-0.5 bg-[#183229] rounded-full -translate-y-px" />
      )}
      <div
        className={`flex items-center gap-2.5 px-3 py-2 rounded-[7px] text-[13px] font-medium text-[#1a1a1a] w-full transition-colors cursor-grab active:cursor-grabbing select-none ${
          isActive ? "bg-[#f7efe9]" : isDragOver ? "bg-[#f7efe9]/40" : "hover:bg-[#f7efe9]/60"
        }`}
        onClick={() => {
          if (label === "Hard Refresh") {
            window.location.reload();
            return;
          }
          onNavigate(page);
          onOpenMenu(null);
        }}
      >
        <Icon size={17} strokeWidth={1.5} className="flex-shrink-0" />
        <span className="flex-1">{label}</span>
        {(isHovered || menuOpen) && (
          <button
            className="w-5 h-5 flex items-center justify-center rounded hover:bg-[#e7d7cc] transition-colors flex-shrink-0"
            onClick={(e) => { e.stopPropagation(); onOpenMenu(menuOpen ? null : label); }}
          >
            <MoreHorizontal size={13} className="text-[#9d9d9d]" />
          </button>
        )}
      </div>

      {menuOpen && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => onOpenMenu(null)} />
          <div className="absolute left-full top-0 ml-1.5 z-20 bg-white border border-[#e8e8e8] rounded-[8px] shadow-lg py-1 min-w-[120px]">
            <button
              className="w-full flex items-center gap-2 px-3 py-2 text-[12px] font-medium text-[#1a1a1a] hover:bg-[#f7efe9] transition-colors"
              onClick={() => onPin(item, isPinned)}
            >
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M8.5 1.5L11.5 4.5L7 6.5L6.5 10L3 6.5L5 2L8.5 1.5Z" stroke="#1a1a1a" strokeWidth="1.2" strokeLinejoin="round"/>
                <path d="M1.5 11.5L4.5 8.5" stroke="#1a1a1a" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
              {isPinned ? "Unpin" : "Pin"}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

function Sidebar({
  active,
  onNavigate,
  cartPage,
  onLogout,
}: {
  active: Page;
  onNavigate: (p: Page) => void;
  cartPage: Page;
  onLogout: () => void;
}) {
  const [favorites, setFavorites] = useState<MenuItem[]>(INITIAL_FAVORITES);
  const [mainMenu, setMainMenu] = useState<MenuItem[]>(INITIAL_MAIN);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const dragItem = useRef<{ label: string; section: "fav" | "main" } | null>(null);
  const dragOverItem = useRef<{ label: string; section: "fav" | "main" } | null>(null);

  function handlePin(item: MenuItem, isPinned: boolean) {
    if (isPinned) {
      setFavorites((prev) => prev.filter((f) => f.label !== item.label));
      setMainMenu((prev) => [...prev, item]);
    } else {
      setMainMenu((prev) => prev.filter((m) => m.label !== item.label));
      setFavorites((prev) => [...prev, item]);
    }
    setOpenMenu(null);
  }

  function handleDrop() {
    const from = dragItem.current;
    const to = dragOverItem.current;
    if (!from || !to || from.label === to.label) return;

    const reorder = (list: MenuItem[], fromLabel: string, toLabel: string) => {
      const arr = [...list];
      const fromIdx = arr.findIndex((i) => i.label === fromLabel);
      const toIdx = arr.findIndex((i) => i.label === toLabel);
      if (fromIdx === -1 || toIdx === -1) return arr;
      const [moved] = arr.splice(fromIdx, 1);
      arr.splice(toIdx, 0, moved);
      return arr;
    };

    if (from.section === "fav" && to.section === "fav") {
      setFavorites((prev) => reorder(prev, from.label, to.label));
    } else if (from.section === "main" && to.section === "main") {
      setMainMenu((prev) => reorder(prev, from.label, to.label));
    }

    dragItem.current = null;
    dragOverItem.current = null;
  }

  const handleNavigate = (nextPage: Page) => {
    onNavigate(nextPage === "cart-multi" ? cartPage : nextPage);
  };

  const navItemProps = {
    hoveredItem, openMenu,
    dragItemRef: dragItem, dragOverItemRef: dragOverItem,
    onNavigate: handleNavigate, onHover: setHoveredItem, onOpenMenu: setOpenMenu,
    onPin: handlePin, onDrop: handleDrop,
  };

  return (
    <aside className="sticky top-0 h-screen w-[248px] flex-shrink-0 flex flex-col border-r border-[#eaeaea] bg-[#fffbf8]">
      {/* Logo */}
      <button
        type="button"
        onClick={() => onNavigate("products")}
        className="flex w-full cursor-pointer items-center gap-2.5 px-5 pt-6 pb-5 text-left"
        aria-label="Go to catalog"
      >
        <img src={scriptlinkrxLogo} alt="ScriptLinkRx" className="h-[26px] w-8 object-contain" />
        <span className="font-['Poppins',sans-serif] font-semibold text-[17px] text-[#1a1a1a] uppercase tracking-wide">
          S<span className="lowercase">CRIPTLINKrx</span>
        </span>
      </button>

      {/* Search */}
      <div className="px-3 pb-4">
        <div className="bg-[#f9f0ea] rounded-[7px] h-8 flex items-center gap-2 px-3">
          <Search size={13} className="text-[#9d9d9d] flex-shrink-0" />
          <input
            type="text"
            placeholder="Search stock or Orders"
            className="text-[11px] text-[#1a1a1a] font-medium flex-1 bg-transparent outline-none placeholder:text-[#9d9d9d]"
          />
          <span className="bg-[#e7d7cc] rounded text-[9px] text-[#686868] px-1.5 py-0.5 flex-shrink-0">/</span>
        </div>
      </div>

      <div className="h-px bg-[#dee3ea] mx-4 mb-4" />

      {/* Favorites */}
      <div className="px-4 mb-4">
        <p className="text-[11px] text-[#1a1a1a] opacity-40 font-medium mb-2.5">Favorites</p>
        <div className="flex flex-col gap-1">
          {favorites.map((item) => (
            <NavItem key={item.label} item={item} isPinned={true} isActive={item.page === "cart-multi" ? active === cartPage : item.page === "orders" ? active === "orders" || active === "order-detail" : active === item.page} section="fav" {...navItemProps} />
          ))}
        </div>
      </div>

      {/* Main Menu */}
      <div className="px-4">
        <p className="text-[11px] text-[#1a1a1a] opacity-40 font-medium mb-2.5">Main Menu</p>
        <div className="flex flex-col gap-1">
          {mainMenu.map((item) => {
            const isActive = active === item.page && item.label !== "Hard Refresh";
            return <NavItem key={item.label} item={item} isPinned={false} isActive={isActive} section="main" {...navItemProps} />;
          })}
        </div>
      </div>

      <div className="mt-auto" />
      <div className="border-t border-[#e8e3df] px-4 py-4">
        <UserChip onNavigate={onNavigate} onLogout={onLogout} />
      </div>
    </aside>
  );
}

// ─── Header ──────────────────────────────────────────────────────────────────

function UserChip({ onNavigate, onLogout }: { onNavigate: (p: Page) => void; onLogout: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="relative">
      {menuOpen && <button className="fixed inset-0 z-30 cursor-default" onClick={() => setMenuOpen(false)} aria-label="Close account menu" />}
      {menuOpen && (
        <div className="absolute bottom-[calc(100%+10px)] left-0 z-40 w-[214px] overflow-hidden rounded-[10px] border border-[#dddeda] bg-white shadow-[0_12px_35px_rgba(24,50,41,0.16)]">
          <div className="border-b border-[#eceeea] px-3.5 py-3">
            <p className="text-[12px] font-semibold text-[#1a1a1a]">Zee</p>
            <p className="mt-0.5 text-[10px] text-[#7a837f]">Account menu</p>
          </div>
          <div className="p-1.5">
            <button onClick={() => { onNavigate("dashboard"); setMenuOpen(false); }} className="flex h-9 w-full items-center gap-2 rounded-[7px] px-2.5 text-[12px] font-medium text-[#1a1a1a] hover:bg-[#f4f6f5]">
              <LayoutDashboard size={15} /> Dashboard
            </button>
            <button onClick={onLogout} className="flex h-9 w-full items-center gap-2 rounded-[7px] px-2.5 text-[12px] font-semibold text-[#1a1a1a] hover:bg-[#f4f6f5]">
              <LogOut size={15} /> Log out
            </button>
          </div>
        </div>
      )}
      <button
        onClick={() => setMenuOpen(current => !current)}
        className="flex items-center gap-2.5 rounded-[26px] bg-[#f6f4f5] px-3.5 py-2.5 transition-colors hover:bg-[#eee9e5]"
        aria-expanded={menuOpen}
        aria-label="Open account menu"
      >
        <div className="relative flex size-8 items-center justify-center rounded-full bg-[#b6a7ff]">
          <span className="text-[14px] font-medium text-[#6947ef]">Z</span>
          <span className="absolute -right-0.5 -top-1 size-3.5 rounded-full border-2 border-[#f6f4f5] bg-[#ff7e86]" />
        </div>
        <div className="text-left leading-tight">
          <div className="flex items-center gap-2">
            <span className="text-[14px] font-medium text-[#151515]">Hi, Zee</span>
            <img src={userVerifiedIcon} alt="Verified" className="size-3.5" />
          </div>
          <span className="mt-0.5 block text-[11px] text-[#777]">Verified User</span>
        </div>
      </button>
    </div>
  );
}

function HeaderActions({
  onNavigate,
  cartPage = "cart-single",
  favoriteProducts,
  onProductSelect,
}: {
  onNavigate: (p: Page) => void;
  cartPage?: Page;
  favoriteProducts?: CardDef[];
  onProductSelect?: (product: CardDef) => void;
}) {
  const [cartOpen, setCartOpen] = useState(false);
  const [favoritesOpen, setFavoritesOpen] = useState(false);
  const { cartItemCount, cartPreviewItems, updateCartItemQty, removeCartItem, clearCartItems } = useCartSummary();
  const sharedFavorites = useProductFavorites();
  const products = favoriteProducts ?? sharedFavorites.favoriteProducts;
  const favoriteCount = products.length;
  const cartSubtotal = cartPreviewItems.reduce((sum, item) => {
    const unitPrice = Number.parseFloat(item.price.replace(/[^0-9.]/g, ""));
    return sum + (Number.isFinite(unitPrice) ? unitPrice * (item.qty ?? 1) : 0);
  }, 0);

  return (
    <div className="flex items-center gap-5">
      <div className="relative">
        <button
          onClick={() => {
            setCartOpen(open => !open);
            setFavoritesOpen(false);
          }}
          className="relative flex items-center gap-1.5 text-[13px] font-medium text-[#1a1a1a] transition-opacity hover:opacity-70"
          aria-expanded={cartOpen}
        >
          <span className="relative">
            <ShoppingCart size={17} strokeWidth={1.5} />
            {cartItemCount > 0 && (
              <span className="absolute -right-2.5 -top-2 flex size-4 items-center justify-center rounded-full bg-[#183229] text-[9px] font-bold text-white">
                {cartItemCount}
              </span>
            )}
          </span>
          Cart
        </button>

        {cartOpen && (
          <div className="absolute right-0 top-8 z-50 w-[340px] overflow-hidden rounded-[6px] border border-[#e8e3df] bg-white shadow-[0_18px_45px_rgba(24,50,41,0.18)]">
            <div className="flex h-12 items-center justify-between border-b border-[#eee8e3] px-4">
              <p className="text-[14px] font-medium text-[#6f7782]">{cartItemCount} product{cartItemCount === 1 ? "" : "s"}</p>
              {cartPreviewItems.length > 0 ? (
                <button onClick={clearCartItems} className="text-[13px] font-semibold text-[#183229] transition-opacity hover:opacity-70">
                  Clear all
                </button>
              ) : (
                <ShoppingCart size={16} className="text-[#183229]" />
              )}
            </div>
            <div className="max-h-[260px] overflow-y-auto px-3 py-2">
              {cartPreviewItems.length > 0 ? (
                cartPreviewItems.map(item => (
                  <div key={`${item.id}-${item.name}`} className="group grid grid-cols-[46px_minmax(0,1fr)_28px] items-start gap-3 rounded-[7px] px-1.5 py-3 transition-colors hover:bg-[#fffbf8]">
                    <span className="flex size-11 items-center justify-center overflow-hidden rounded-[8px] bg-[#fbfaf8]">
                      <img src={item.img} alt="" className="h-9 w-10 object-contain mix-blend-multiply" />
                    </span>
                    <span className="min-w-0">
                      <span className="block truncate text-[14px] font-semibold text-[#1a1a1a]">{item.name}</span>
                      <span className="mt-1 block truncate text-[12px] text-[#6f7782]">
                        Price per unit: <strong className="font-bold text-[#1a1a1a]">{item.price}</strong>
                      </span>
                      <span className="mt-2 inline-flex h-7 items-center overflow-hidden rounded-full border border-[#d8dfdc] bg-white">
                        <button onClick={() => updateCartItemQty(item.id, -1)} className="flex size-7 items-center justify-center text-[#6f7782] hover:bg-[#eef5f1]" aria-label={`Decrease ${item.name}`}>
                          <Minus size={12} />
                        </button>
                        <span className="flex h-7 min-w-7 items-center justify-center px-1 text-[12px] font-semibold text-[#1a1a1a]">{item.qty ?? 1}</span>
                        <button onClick={() => updateCartItemQty(item.id, 1)} className="flex size-7 items-center justify-center text-[#183229] hover:bg-[#eef5f1]" aria-label={`Increase ${item.name}`}>
                          <Plus size={12} />
                        </button>
                      </span>
                    </span>
                    <button onClick={() => removeCartItem(item.id)} className="flex size-7 items-center justify-center rounded-[6px] text-[#d92d20] opacity-0 transition-all hover:bg-[#fbeaea] group-hover:opacity-100" aria-label={`Remove ${item.name}`}>
                      <Trash2 size={15} />
                    </button>
                  </div>
                ))
              ) : (
                <div className="px-4 py-8 text-center">
                  <ShoppingCart size={22} className="mx-auto text-[#c7cfcb]" />
                  <p className="mt-2 text-[12px] font-semibold text-[#1a1a1a]">Your cart is empty</p>
                  <p className="mt-1 text-[11px] text-[#6f7782]">Add products to see them here.</p>
                </div>
              )}
            </div>
            <div className="border-t border-[#eee8e3] px-3 py-3">
              <button
                onClick={() => {
                  setCartOpen(false);
                  onNavigate(cartPage);
                }}
                className="flex h-10 w-full items-center justify-center rounded-[10px] bg-[#183229] text-[12px] font-bold uppercase tracking-[0.02em] text-white transition-colors hover:bg-[#244438]"
              >
                Go to cart{cartSubtotal > 0 ? ` ($${cartSubtotal.toFixed(2)})` : ""}
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="relative">
        <button
          onClick={() => {
            setFavoritesOpen(open => !open);
            setCartOpen(false);
          }}
          className="relative flex items-center gap-1.5 text-[13px] font-medium text-[#1a1a1a] transition-opacity hover:opacity-70"
          aria-expanded={favoritesOpen}
        >
          <span className="relative">
            <Heart size={17} strokeWidth={1.5} />
            {favoriteCount > 0 && (
              <span className="absolute -right-2.5 -top-2 flex size-4 items-center justify-center rounded-full bg-[#183229] text-[9px] font-bold text-white">
                {favoriteCount}
              </span>
            )}
          </span>
          Favorites
        </button>

        {favoritesOpen && (
          <div className="absolute right-0 top-8 z-50 w-[360px] overflow-hidden rounded-[6px] border border-[#e8e3df] bg-white shadow-[0_18px_45px_rgba(24,50,41,0.18)]">
            <div className="flex h-12 items-center justify-between border-b border-[#eee8e3] px-4">
              <p className="text-[14px] font-medium text-[#6f7782]">{favoriteCount} product{favoriteCount === 1 ? "" : "s"}</p>
              <button
                onClick={() => sharedFavorites.setFavoriteProductIds(new Set())}
                className="text-[13px] font-semibold text-[#183229] transition-opacity hover:opacity-70"
              >
                Clear all
              </button>
            </div>

            <div className="max-h-[260px] overflow-y-auto px-3 py-2">
              {products.length > 0 ? (
                products.map(product => (
                  <button
                    key={product.id}
                    onClick={() => {
                      onProductSelect?.(product);
                      setFavoritesOpen(false);
                      onNavigate("product-detail");
                    }}
                    className="grid w-full grid-cols-[42px_minmax(0,1fr)] items-center gap-3 rounded-[6px] px-1 py-2.5 text-left transition-colors hover:bg-[#fffbf8]"
                  >
                    <span className="flex h-8 w-10 items-center justify-center overflow-hidden bg-[#fbfaf8]">
                      <img src={product.img} alt="" className="h-8 w-10 object-contain mix-blend-multiply" />
                    </span>
                    <span className="min-w-0">
                      <span className="block truncate text-[14px] font-semibold text-[#1a1a1a]">{product.name}</span>
                      <span className="mt-1 block truncate text-[12px] text-[#6f7782]">
                        Price per unit: <strong className="font-bold text-[#1a1a1a]">{product.price}</strong>
                      </span>
                    </span>
                  </button>
                ))
              ) : (
                <div className="px-4 py-8 text-center">
                  <Heart size={22} className="mx-auto text-[#c7cfcb]" />
                  <p className="mt-2 text-[12px] font-semibold text-[#1a1a1a]">No favorites yet</p>
                  <p className="mt-1 text-[11px] text-[#6f7782]">Save products from the catalog to see them here.</p>
                </div>
              )}
            </div>

            <div className="border-t border-[#eee8e3] px-3 py-3">
              <button
                onClick={() => {
                  setFavoritesOpen(false);
                  onNavigate("favorites");
                }}
                className="flex h-10 w-full items-center justify-center rounded-[10px] bg-[#183229] text-[12px] font-bold uppercase tracking-[0.02em] text-white transition-colors hover:bg-[#244438]"
              >
                Go to Favorites
              </button>
            </div>
          </div>
        )}
      </div>

    </div>
  );
}

function Header({
  title,
  breadcrumb,
  onNavigate,
  favoriteProducts = [],
  cartPage = "cart-single",
  onProductSelect,
}: {
  title: string;
  breadcrumb?: string[];
  onNavigate: (p: Page) => void;
  favoriteProducts?: CardDef[];
  cartPage?: Page;
  onProductSelect?: (product: CardDef) => void;
}) {
  return (
    <div className="flex items-start justify-between mb-6">
      <div>
        <h1 className="text-[28px] font-semibold text-[#1a1a1a] leading-tight">{title}</h1>
        {breadcrumb && (
          <p className="text-[11px] text-[#4b4b4b] mt-1">
            {breadcrumb.slice(0, -1).map((b) => (
              <span key={b}>
                <button
                  className="hover:underline text-[12px]"
                  onClick={() => onNavigate("products")}
                >
                  {b}
                </button>
                {", "}
              </span>
            ))}
            <span className="text-[#1a1a1a] font-medium">{breadcrumb[breadcrumb.length - 1]}</span>
          </p>
        )}
      </div>
    </div>
  );
}

// ─── Products (Catalog) ───────────────────────────────────────────────────────

// Lightweight product list for dashboard "Top Products" strip
const ALL_PRODUCTS = [
  { id: 1, name: "NAD+ Injection", price: "$55.88", img: img430 },
  { id: 2, name: "Nandrolone Decanoate", price: "$35.88", img: img429 },
  { id: 3, name: "B-Complex", price: "$45.99", img: img431 },
  { id: 4, name: "MIC/B12", price: "$215.98", img: img432 },
  { id: 5, name: "Esteadol", price: "$65.99", img: img433 },
  { id: 6, name: "Atropine Sulfate", price: "$15.98", img: img434 },
];

// SVG path data (sourced from Figma export)
const HEART_OUTLINE = "M9.60356 0C8.3794 0 7.3076 0.526417 6.6395 1.41623C5.9714 0.526417 4.89959 0 3.67544 0C2.70099 0.00109833 1.76676 0.388683 1.07772 1.07772C0.388683 1.76676 0.00109833 2.70099 0 3.67544C0 7.82512 6.1528 11.184 6.41482 11.3227C6.48388 11.3599 6.56108 11.3793 6.6395 11.3793C6.71792 11.3793 6.79511 11.3599 6.86417 11.3227C7.12619 11.184 13.279 7.82512 13.279 3.67544C13.2779 2.70099 12.8903 1.76676 12.2013 1.07772C11.5122 0.388683 10.578 0.00109833 9.60356 0ZM6.6395 10.3624C5.55702 9.73161 0.948499 6.85824 0.948499 3.67544C0.949441 2.9525 1.23704 2.25944 1.74824 1.74824C2.25944 1.23704 2.9525 0.949441 3.67544 0.948499C4.82846 0.948499 5.79652 1.56265 6.20082 2.54909C6.23655 2.63607 6.29733 2.71047 6.37544 2.76283C6.45355 2.81519 6.54546 2.84314 6.6395 2.84314C6.73353 2.84314 6.82544 2.81519 6.90355 2.76283C6.98166 2.71047 7.04245 2.63607 7.07818 2.54909C7.48247 1.56087 8.45054 0.948499 9.60356 0.948499C10.3265 0.949441 11.0196 1.23704 11.5308 1.74824C12.0419 2.25944 12.3296 2.9525 12.3305 3.67544C12.3305 6.8535 7.72079 9.73101 6.6395 10.3624Z";
const HEART_FILLED = "M15.4077 6.55061C15.4077 11.0445 8.7445 14.682 8.46075 14.8322C8.38596 14.8724 8.30236 14.8935 8.21743 14.8935C8.13251 14.8935 8.04891 14.8724 7.97412 14.8322C7.69037 14.682 1.02722 11.0445 1.02722 6.55061C1.02841 5.49534 1.44814 4.48362 2.19433 3.73743C2.94053 2.99124 3.95224 2.5715 5.00752 2.57031C6.33321 2.57031 7.49392 3.14039 8.21743 4.10401C8.94095 3.14039 10.1017 2.57031 11.4274 2.57031C12.4826 2.5715 13.4943 2.99124 14.2405 3.73743C14.9867 4.48362 15.4065 5.49534 15.4077 6.55061Z";
const RX_ICON = "M15.9802 8.84809C15.9898 8.88727 15.9916 8.92795 15.9855 8.96784C15.9794 9.00772 15.9656 9.046 15.9447 9.08052C15.9238 9.11503 15.8963 9.14509 15.8638 9.16897C15.8313 9.19286 15.7944 9.21011 15.7552 9.21973L14.8092 9.45009L15.0572 10.3757C15.0677 10.4147 15.0703 10.4554 15.0651 10.4954C15.0598 10.5354 15.0467 10.5739 15.0265 10.6089C15.0063 10.6438 14.9795 10.6744 14.9475 10.699C14.9154 10.7235 14.8789 10.7416 14.8399 10.752C14.8141 10.7594 14.7873 10.7636 14.7604 10.7643C14.6929 10.7642 14.6272 10.7419 14.5736 10.7007C14.52 10.6595 14.4815 10.6019 14.464 10.5366L14.1677 9.43089L12.6105 8.53212V10.33L13.442 11.1612C13.4706 11.1898 13.4932 11.2237 13.5087 11.2609C13.5241 11.2982 13.532 11.3382 13.532 11.3785C13.532 11.4189 13.5241 11.4589 13.5087 11.4961C13.4932 11.5334 13.4706 11.5673 13.442 11.5958C13.4135 11.6244 13.3796 11.647 13.3423 11.6625C13.3051 11.6779 13.2651 11.6859 13.2247 11.6859C13.1844 11.6859 13.1444 11.6779 13.1071 11.6625C13.0699 11.647 13.036 11.6244 13.0074 11.5958L12.3033 10.8913L11.5992 11.5958C11.5707 11.6244 11.5368 11.647 11.4995 11.6625C11.4622 11.6779 11.4223 11.6859 11.3819 11.6859C11.3415 11.6859 11.3016 11.6779 11.2643 11.6625C11.227 11.647 11.1931 11.6244 11.1646 11.5958C11.1361 11.5673 11.1134 11.5334 11.098 11.4961C11.0825 11.4589 11.0746 11.4189 11.0746 11.3785C11.0746 11.3382 11.0825 11.2982 11.098 11.2609C11.1134 11.2237 11.1361 11.1898 11.1646 11.1612L11.9962 10.33V8.53212L10.4394 9.43089L10.143 10.5366C10.1255 10.6019 10.0869 10.6596 10.0332 10.7008C9.97958 10.742 9.91383 10.7643 9.8462 10.7643C9.81925 10.7642 9.79241 10.7607 9.76634 10.7539C9.72736 10.7435 9.69082 10.7255 9.6588 10.7009C9.62678 10.6764 9.59991 10.6457 9.57973 10.6108C9.55955 10.5759 9.54646 10.5373 9.54119 10.4973C9.53592 10.4573 9.53859 10.4166 9.54904 10.3776L9.79705 9.45201L8.85106 9.22165C8.77195 9.2022 8.7038 9.15212 8.6616 9.08243C8.61941 9.01273 8.60663 8.92913 8.62608 8.85001C8.64553 8.77089 8.69561 8.70274 8.76531 8.66055C8.835 8.61836 8.91861 8.60558 8.99772 8.62503L10.1284 8.90261L11.689 8L10.1288 7.09931L8.99811 7.37689C8.97412 7.38283 8.94949 7.38579 8.92478 7.38572C8.84968 7.38577 8.77716 7.35831 8.72094 7.30852C8.66471 7.25873 8.62868 7.19006 8.61965 7.11551C8.61062 7.04095 8.62922 6.96567 8.67193 6.9039C8.71464 6.84213 8.77851 6.79815 8.85145 6.78027L9.79744 6.54991L9.54942 5.62235C9.52835 5.54364 9.5394 5.45978 9.58015 5.38922C9.6209 5.31866 9.68801 5.26718 9.76672 5.2461C9.84543 5.22503 9.92929 5.23608 9.99985 5.27683C10.0704 5.31758 10.1219 5.3847 10.143 5.46341L10.4394 6.56911L11.9962 7.46788V5.66996L11.1646 4.83876C11.107 4.78113 11.0746 4.70296 11.0746 4.62146C11.0746 4.5811 11.0825 4.54114 11.098 4.50385C11.1134 4.46657 11.1361 4.43269 11.1646 4.40416C11.1931 4.37562 11.227 4.35298 11.2643 4.33754C11.3016 4.32209 11.3415 4.31415 11.3819 4.31415C11.4634 4.31415 11.5416 4.34652 11.5992 4.40416L12.3033 5.10866L13.0074 4.40416C13.0651 4.34652 13.1432 4.31415 13.2247 4.31415C13.3062 4.31415 13.3844 4.34652 13.442 4.40416C13.4997 4.46179 13.532 4.53995 13.532 4.62146C13.532 4.70296 13.4997 4.78113 13.442 4.83876L12.6105 5.66996V7.46788L14.1673 6.56911L14.4637 5.46341C14.4847 5.3847 14.5362 5.31758 14.6068 5.27683C14.6773 5.23608 14.7612 5.22503 14.8399 5.2461C14.9186 5.26718 14.9857 5.31866 15.0265 5.38922C15.0672 5.45978 15.0783 5.54364 15.0572 5.62235L14.8092 6.54799L15.7552 6.77835C15.8302 6.79436 15.8964 6.83783 15.941 6.90023C15.9855 6.96262 16.0052 7.03942 15.996 7.11553C15.9868 7.19164 15.9495 7.26157 15.8913 7.31157C15.8332 7.36156 15.7585 7.38801 15.6819 7.38572C15.6571 7.38579 15.6325 7.38283 15.6085 7.37689L14.4779 7.09931L12.9176 8L14.4779 8.90069L15.6085 8.62311C15.6477 8.61347 15.6884 8.61165 15.7283 8.61774C15.7682 8.62383 15.8064 8.63772 15.841 8.65861C15.8755 8.67951 15.9055 8.70699 15.9294 8.7395C15.9533 8.77201 15.9705 8.80891 15.9802 8.84809Z";

// Exact Figma product card using stacking CSS grid (col-1 row-1 for all children)
function FigmaCard({
  name,
  price,
  pharmacies,
  img,
  imgW,
  imgH,
  imgL,
  imgT,
  imgContain,
  favorited,
  onFavorite,
  favoriteLoading = false,
  hasRxBadge,
  btnOffsetX,
  heartVariant,
  onClick,
}: {
  name: string;
  price: string;
  pharmacies: number;
  img: string;
  imgW: number;
  imgH: number;
  imgL: number;
  imgT: number;
  imgContain?: boolean;
  favorited: boolean;
  onFavorite: () => void;
  favoriteLoading?: boolean;
  hasRxBadge?: boolean;
  btnOffsetX: number;
  heartVariant: "green" | "black" | "none";
  onClick: () => void;
}) {
  return (
    <div
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0 cursor-pointer"
      style={{ zoom: 1.3 }}
      onClick={onClick}
    >
      {/* Card background — sets the cell size */}
      <div className="bg-gradient-to-b col-1 from-[rgba(247,239,233,0.1)] h-[287.477px] ml-0 mt-0 relative rounded-[12.13px] row-1 to-[rgba(236,229,182,0.1)] w-[205.6px]" />

      {/* RX badge */}
      {hasRxBadge && (
        <div className="col-1 relative row-1" style={{ marginLeft: 11.4, marginTop: 17, width: 24.615, height: 16 }}>
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.6154 16">
            <rect fill="#E7EEFA" height="16" rx="4.92308" width="24.6154" />
            <path d={RX_ICON} fill="#1D4289" />
          </svg>
        </div>
      )}

      {/* Product info */}
      <div
        className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative row-1"
        style={{ marginLeft: 20.62, marginTop: 219.47 }}
      >
        {/* Price — mt-21.91 pushes it below the name in the stacking grid */}
        <div
          className="col-1 flex flex-col justify-center relative row-1 text-[#1a1a1a]"
          style={{ marginTop: 21.91, height: 10.917, width: 67.32, fontSize: 7.884, lineHeight: "10.917px" }}
        >
          <p>{price}</p>
        </div>
        {/* Name — mt-0, appears at top of this inner grid */}
        <div
          className="col-1 flex flex-col justify-center relative row-1 text-[#1a1a1a]"
          style={{ marginTop: 0, marginLeft: 0.44, height: 17, fontSize: 13.525, lineHeight: "16.982px", letterSpacing: "-0.279px", width: 172 }}
        >
          <p>{name}</p>
        </div>
        {/* Pharmacies — mt-42.53 */}
        <div
          className="col-1 flex flex-col justify-center relative row-1 text-[#666]"
          style={{ marginTop: 42.53, height: 10.917, fontSize: 7.824, lineHeight: "10.917px", width: 105.936 }}
        >
          <p className="underline decoration-solid [text-underline-position:from-font] decoration-from-font">{pharmacies} Pharmacies</p>
        </div>
      </div>

      {/* Product image */}
      <div
        className="col-1 relative row-1 pointer-events-none"
        style={{ marginLeft: imgL, marginTop: imgT, width: imgW, height: imgH }}
      >
        <img
          alt={name}
          className={`absolute inset-0 max-w-none size-full ${imgContain ? "object-contain" : "object-cover"}`}
          src={img}
        />
      </div>

      {/* Favorite button — rendered last so it sits on top */}
      {heartVariant !== "none" && (
        <button
          className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative row-1 z-10"
          style={{ marginLeft: btnOffsetX, marginTop: 15 }}
          onClick={(e) => { e.stopPropagation(); onFavorite(); }}
          disabled={favoriteLoading}
          aria-busy={favoriteLoading}
        >
          {/* White shadow circle */}
          <div className="col-1 relative row-1" style={{ width: 27.5, height: 27.5 }}>
            <div className="absolute" style={{ inset: "-6.9% -20.69% -34.48% -20.69%" }}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38.8793 38.8793">
                <g filter="url(#cardShadow)">
                  <circle cx="19.4397" cy="15.6466" fill="white" r="13.75" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="38.8793" id="cardShadow" width="38.8793" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feMorphology in="SourceAlpha" operator="dilate" radius="1.89655" result="effect1" />
                    <feOffset dy="3.7931" />
                    <feGaussianBlur stdDeviation="1.89655" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0" />
                    <feBlend in2="BackgroundImageFix" mode="normal" result="effect1" />
                    <feBlend in="SourceGraphic" in2="effect1" mode="normal" result="shape" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
          {/* Heart icon */}
          {favoriteLoading ? (
            <div className="col-1 relative row-1" style={{ marginLeft: 6.2, marginTop: 6.1, width: 15.5, height: 15.5 }}>
              <Loader2 size={15.5} className="animate-spin text-[#183229]" />
            </div>
          ) : heartVariant === "green" ? (
            /* Filled green heart */
            <div className="col-1 relative row-1" style={{ marginLeft: 5.7, marginTop: 5.87, width: 16.435, height: 16.435 }}>
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.4348 16.4348">
                <path d={HEART_FILLED} fill="#C5D853" />
              </svg>
            </div>
          ) : (
            /* Outline black heart */
            <div className="col-1 relative row-1" style={{ marginLeft: 7.59, marginTop: 8.53, width: 13.279, height: 11.379 }}>
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.279 11.3793">
                <path d={HEART_OUTLINE} fill="black" />
              </svg>
            </div>
          )}
        </button>
      )}
    </div>
  );
}

// Product definitions matching the Figma dashboard export exactly
type CardDef = {
  id: number;
  name: string;
  price: string;
  pharmacies: number;
  pharmacy: string;
  shippingState: string;
  areaOfTreatment: string;
  dosage: string;
  img: string;
  imgW: number; imgH: number; imgL: number; imgT: number;
  imgContain?: boolean;
  hasRxBadge?: boolean;
  btnOffsetX: number;
  heartVariant: "green" | "black" | "none";
};

const POPULAR_CARDS: CardDef[] = [
  { id: 1, name: "NAD+ Injecton", price: "$55.88", pharmacies: 4, pharmacy: "Optimal Balance Pharmacy", shippingState: "New York", areaOfTreatment: "Wellness", dosage: "Injection", img: img430, imgW: 111, imgH: 187, imgL: 47, imgT: 12, btnOffsetX: 170, heartVariant: "green" },
  { id: 2, name: "Nandrolone Decanoate", price: "$35.88", pharmacies: 2, pharmacy: "DCA Pharmacy", shippingState: "Florida", areaOfTreatment: "Men's Health", dosage: "Injection", img: img429, imgW: 138, imgH: 173, imgL: 37.4, imgT: 27, hasRxBadge: true, btnOffsetX: 168.4, heartVariant: "black" },
  { id: 3, name: "NAD+ Injecton", price: "10 mg/Vial", pharmacies: 4, pharmacy: "1st Choice Compounding Pharmacy", shippingState: "New York", areaOfTreatment: "Wellness", dosage: "Injection", img: img431, imgW: 133, imgH: 205, imgL: 34, imgT: 2, btnOffsetX: 168, heartVariant: "none" },
  { id: 4, name: "MIC/B12", price: "$215.98", pharmacies: 5, pharmacy: "Rush Pharmacy TX", shippingState: "Texas", areaOfTreatment: "Wellness", dosage: "Injection", img: img432, imgW: 152, imgH: 190, imgL: 31.8, imgT: 9.48, btnOffsetX: 168.2, heartVariant: "black" },
  { id: 5, name: "Esteadol", price: "$65.99", pharmacies: 4, pharmacy: "Thesis Pharmacy", shippingState: "New York", areaOfTreatment: "Women's Health", dosage: "Gel", img: img433, imgW: 99, imgH: 166, imgL: 49.8, imgT: 21, btnOffsetX: 168.8, heartVariant: "black" },
  { id: 6, name: "NAD+ Injecton", price: "$15.98", pharmacies: 4, pharmacy: "Optimal Balance Pharmacy", shippingState: "New York", areaOfTreatment: "Wellness", dosage: "Injection", img: img434, imgW: 130, imgH: 193, imgL: 33.6, imgT: 18, btnOffsetX: 168.6, heartVariant: "black" },
  { id: 7, name: "Testosterone Cypionate Injection", price: "$135.99", pharmacies: 5, pharmacy: "Spring Creek Pharmacy", shippingState: "New York", areaOfTreatment: "Men's Health", dosage: "Injection", img: img452dash, imgW: 166, imgH: 181, imgL: 21, imgT: 19.48, btnOffsetX: 168, heartVariant: "black" },
];

const ALL_CARDS: CardDef[] = [
  { id: 11, name: "NAD+ Injecton", price: "$55.88", pharmacies: 4, pharmacy: "Optimal Balance Pharmacy", shippingState: "New York", areaOfTreatment: "Wellness", dosage: "Injection", img: img435, imgW: 111, imgH: 187, imgL: 47, imgT: 12, btnOffsetX: 170, heartVariant: "green" },
  { id: 12, name: "Nandrolone Decanoate", price: "$35.88", pharmacies: 2, pharmacy: "DCA Pharmacy", shippingState: "Florida", areaOfTreatment: "Men's Health", dosage: "Injection", img: img429, imgW: 138, imgH: 173, imgL: 37.4, imgT: 27, hasRxBadge: true, btnOffsetX: 168.4, heartVariant: "black" },
  { id: 13, name: "NAD+ Injecton", price: "10 mg/Vial", pharmacies: 4, pharmacy: "1st Choice Compounding Pharmacy", shippingState: "New York", areaOfTreatment: "Wellness", dosage: "Injection", img: img436, imgW: 133, imgH: 205, imgL: 34, imgT: 2, btnOffsetX: 168, heartVariant: "none" },
  { id: 14, name: "MIC/B12", price: "$215.98", pharmacies: 3, pharmacy: "Thesis Pharmacy", shippingState: "Texas", areaOfTreatment: "Wellness", dosage: "Injection", img: img432, imgW: 152, imgH: 190, imgL: 31.8, imgT: 9.48, btnOffsetX: 168.2, heartVariant: "black" },
  { id: 15, name: "Esteadol", price: "$65.99", pharmacies: 4, pharmacy: "Rush Pharmacy TX", shippingState: "New York", areaOfTreatment: "Women's Health", dosage: "Gel", img: img433, imgW: 99, imgH: 166, imgL: 49.8, imgT: 21, btnOffsetX: 168.8, heartVariant: "black" },
  { id: 16, name: "NAD+ Injecton", price: "$15.98", pharmacies: 4, pharmacy: "1st Choice Compounding Pharmacy", shippingState: "New York", areaOfTreatment: "Wellness", dosage: "Injection", img: img437, imgW: 130, imgH: 193, imgL: 33.6, imgT: 18, btnOffsetX: 168.6, heartVariant: "black" },
  { id: 17, name: "Testosterone Cypionate Injection", price: "$135.99", pharmacies: 5, pharmacy: "DCA Pharmacy", shippingState: "New York", areaOfTreatment: "Men's Health", dosage: "Injection", img: img452dash, imgW: 166, imgH: 181, imgL: 21, imgT: 19.48, btnOffsetX: 168, heartVariant: "black" },
];

const PHARMACIES_MULTI = [
  { name: "All Pharmacies", count: 200 },
  { name: "1st Choice Compounding Pharmacy", count: 37 },
  { name: "Optimal Balance Pharmacy", count: 59 },
  { name: "DCA Pharmacy", count: 51 },
  { name: "Thesis Pharmacy", count: 53 },
  { name: "Rush Pharmacy TX", count: 20 },
  { name: "Spring Creek Pharmacy", count: 3 },
];

function MultiPatientPanel({ activePharmacy, onSelect }: { activePharmacy: string; onSelect: (name: string) => void }) {

  return (
    <div className="mb-5">
      {/* Warning banner */}
      <div className="flex items-start gap-3 bg-[#fffbeb] border border-[#fde68a] rounded-[10px] px-4 py-3 mb-4">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-0.5">
          <path d="M8 1.5L14.5 13H1.5L8 1.5Z" stroke="#d97706" strokeWidth="1.4" strokeLinejoin="round"/>
          <path d="M8 6V9" stroke="#d97706" strokeWidth="1.4" strokeLinecap="round"/>
          <circle cx="8" cy="11" r="0.6" fill="#d97706"/>
        </svg>
        <div>
          <p className="text-[12px] font-semibold text-[#92400e] mb-0.5">Multi-Patient Orders!</p>
          <p className="text-[11px] text-[#92400e]/80 leading-relaxed">
            Items in this catalog are available for group purchasing. Order medications for multiple patients from the same pharmacy and have them shipped directly to your clinic.
          </p>
        </div>
      </div>

      {/* Pharmacy filter row */}
      <p className="text-[10px] font-semibold text-[#9d9d9d] tracking-widest uppercase mb-2.5">
        Pharmacies ({PHARMACIES_MULTI.length - 1})
      </p>
      <div className="flex flex-wrap gap-2">
        {PHARMACIES_MULTI.map((ph) => {
          const isActive = activePharmacy === ph.name;
          return (
            <button
              key={ph.name}
              onClick={() => onSelect(ph.name)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-[12px] font-medium transition-all ${
                isActive
                  ? "border-2 border-[#183229] bg-white text-[#183229]"
                  : "border-[#e0e0e0] bg-white text-[#1a1a1a] hover:border-[#183229]/40"
              }`}
            >
              {ph.name}
              <span className={`text-[11px] font-semibold ${isActive ? "text-[#183229]" : "text-[#9d9d9d]"}`}>
                {ph.count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function FavoritesPage({
  onNavigate,
  cartPage,
  onProductSelect,
}: {
  onNavigate: (p: Page) => void;
  cartPage: Page;
  onProductSelect: (product: CardDef) => void;
}) {
  const { favoriteProducts, setFavoriteProductIds } = useProductFavorites();
  const { addCartItems } = useCartSummary();
  const { runWithAppLoader } = useAppLoading();

  function removeFavorite(id: number) {
    setFavoriteProductIds(current => {
      const next = new Set(current);
      next.delete(id);
      return next;
    });
  }

  function addFavoriteProductToCart(product: CardDef) {
    runWithAppLoader(() => {
      addCartItems(1, {
        id: product.id,
        name: product.name,
        price: product.price,
        img: product.img,
        qty: 1,
      });
    });
  }

  return (
    <>
      <Header title="Favorites" onNavigate={onNavigate} cartPage={cartPage} onProductSelect={onProductSelect} />

      <section>
        <div className="flex justify-end pb-3">
          <button
            onClick={() => setFavoriteProductIds(new Set())}
            className="inline-flex h-9 items-center gap-2 rounded-[7px] px-3 text-[12px] font-semibold uppercase tracking-[0.02em] text-[#183229] transition-colors hover:bg-[#f6f4f5]"
          >
            Clear all <Trash2 size={15} />
          </button>
        </div>

        {favoriteProducts.length > 0 ? (
          <div className="flex flex-wrap gap-5">
            {favoriteProducts.map(product => (
              <article key={product.id} className="relative w-[268px]">
                <FigmaCard
                  name={product.name}
                  price={product.price}
                  pharmacies={product.pharmacies}
                  img={product.img}
                  imgW={product.imgW}
                  imgH={product.imgH}
                  imgL={product.imgL}
                  imgT={product.imgT}
                  imgContain={product.imgContain}
                  favorited={true}
                  onFavorite={() => removeFavorite(product.id)}
                  hasRxBadge={product.hasRxBadge}
                  btnOffsetX={product.btnOffsetX}
                  heartVariant={product.heartVariant === "none" ? "black" : "green"}
                  onClick={() => {
                    onProductSelect(product);
                    onNavigate("product-detail");
                  }}
                />
                <div className="absolute bottom-3 left-5 right-5 z-20 grid grid-cols-[minmax(0,1fr)_34px] gap-2">
                  <button
                    onClick={(event) => {
                      event.stopPropagation();
                      addFavoriteProductToCart(product);
                    }}
                    className="flex h-8 items-center justify-center rounded-[10px] bg-white px-3 text-[10px] font-bold uppercase tracking-[0.02em] text-[#183229] transition-colors hover:bg-[#eef5f1]"
                  >
                    Add to cart
                  </button>
                  <button
                    onClick={(event) => {
                      event.stopPropagation();
                      removeFavorite(product.id);
                    }}
                    className="flex h-8 items-center justify-center rounded-[10px] bg-white text-[#183229] transition-colors hover:bg-[#fbeaea] hover:text-[#d92d20]"
                    aria-label={`Remove ${product.name}`}
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center px-4 py-16 text-center">
            <Heart size={28} className="text-[#c7cfcb]" />
            <p className="mt-3 text-[15px] font-semibold text-[#1a1a1a]">No favorite products yet</p>
            <p className="mt-1 max-w-[320px] text-[12px] text-[#6f7782]">Favorite products from the catalog and they will appear here.</p>
            <button onClick={() => onNavigate("products")} className="mt-5 h-10 rounded-[10px] bg-[#183229] px-4 text-[12px] font-semibold text-white">
              Browse catalog
            </button>
          </div>
        )}
      </section>
    </>
  );
}

function ProductsPage({
  onNavigate,
  cartMode,
  setCartMode,
  onProductSelect,
}: {
  onNavigate: (p: Page) => void;
  cartMode: CartMode;
  setCartMode: (mode: CartMode) => void;
  onProductSelect: (product: CardDef) => void;
}) {
  const { favoriteProductIds, setFavoriteProductIds, favoriteProducts } = useProductFavorites();
  const [search, setSearch] = useState("");
  const [activePharmacy, setActivePharmacy] = useState("All Pharmacies");
  const [shippingStates, setShippingStates] = useState<string[]>([]);
  const [areasOfTreatment, setAreasOfTreatment] = useState<string[]>([]);
  const [dosages, setDosages] = useState<string[]>([]);
  const [openCatalogFilter, setOpenCatalogFilter] = useState<string | null>(null);
  const [catalogFilterSearch, setCatalogFilterSearch] = useState<Record<string, string>>({});
  const { runWithAppLoader } = useAppLoading();
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "f") {
        e.preventDefault();
        searchRef.current?.focus();
        searchRef.current?.select();
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  function toggleFav(id: number) {
    runWithAppLoader(() => {
      setFavoriteProductIds((prev) => {
        const next = new Set(prev);
        next.has(id) ? next.delete(id) : next.add(id);
        return next;
      });
    });
  }

  function renderCard(card: CardDef) {
    const fav = favoriteProductIds.has(card.id);
    const heart: "green" | "black" | "none" =
      card.heartVariant === "none" ? "none" : fav ? "green" : "black";
    return (
      <FigmaCard
        key={card.id}
        name={card.name}
        price={card.price}
        pharmacies={card.pharmacies}
        img={card.img}
        imgW={card.imgW}
        imgH={card.imgH}
        imgL={card.imgL}
        imgT={card.imgT}
        imgContain={card.imgContain}
        favorited={fav}
        onFavorite={() => toggleFav(card.id)}
        hasRxBadge={card.hasRxBadge}
        btnOffsetX={card.btnOffsetX}
        heartVariant={heart}
        onClick={() => {
          onProductSelect(card);
          onNavigate("product-detail");
        }}
      />
    );
  }

  function matchesCatalogFilters(card: CardDef) {
    return (shippingStates.length === 0 || shippingStates.includes(card.shippingState))
      && (areasOfTreatment.length === 0 || areasOfTreatment.includes(card.areaOfTreatment))
      && (dosages.length === 0 || dosages.includes(card.dosage));
  }

  const usStates = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware",
    "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky",
    "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi",
    "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico",
    "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania",
    "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont",
    "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming",
  ];
  const dosageCounts: Record<string, number> = {
    Bottle: 6,
    Enema: 2,
    Capsule: 1,
    Injection: 12,
    Gel: 6,
    Lollipop: 2,
    "Iv Bag": 1,
    Jar: 6,
    "Iv Bag 15": 15,
    Jan: 6,
  };
  const dosageOptions = ["Bottle", "Enema", "Capsule", "Injection", "Gel", "Lollipop", "Iv Bag", "Jar", "Iv Bag 15", "Jan"];
  const areaCounts = [...POPULAR_CARDS, ...ALL_CARDS].reduce<Record<string, number>>((counts, card) => {
    counts[card.areaOfTreatment] = (counts[card.areaOfTreatment] ?? 0) + 1;
    return counts;
  }, {});
  const areaOptions = ["Women's Health", "Men's Health", "Wellness", "Weight Loss", "Peptide Therapy", "Hormone Support"];

  const catalogFilters = [
    { label: "Shipping State", values: shippingStates, setValues: setShippingStates, options: usStates },
    { label: "Area of Treatment", values: areasOfTreatment, setValues: setAreasOfTreatment, options: areaOptions },
    { label: "Dosage", values: dosages, setValues: setDosages, options: dosageOptions },
  ];
  const selectedCatalogFilterCount = catalogFilters.reduce((count, filter) => count + filter.values.length, 0);
  const clearCatalogFilters = () => {
    setShippingStates([]);
    setAreasOfTreatment([]);
    setDosages([]);
    setActivePharmacy("All Pharmacies");
  };

  return (
    <>
      {/* Page header — matches Figma layout */}
      <div className="flex items-start justify-between mb-0">
        <h1 className="font-['Inter',sans-serif] font-medium text-[32px] text-black leading-none">Products</h1>
      </div>

      {/* Search + filters bar */}
      <div className="flex items-center gap-[14px] mt-6 mb-5">
        {/* Search box — from Figma import Group1216401138 */}
        <div className="bg-white border border-[#efefef] rounded-[9px] h-[38px] flex items-center gap-2 px-3 w-[220px] flex-shrink-0">
          {/* Magnifier icon — pce98200 */}
          <svg width="14" height="14" viewBox="0 0 18 18" fill="none" className="flex-shrink-0">
            <path d="M16.1489 15.3529L12.6283 11.8331C13.6487 10.608 14.1575 9.03675 14.0489 7.4461C13.9403 5.85545 13.2227 4.3679 12.0452 3.2929C10.8678 2.21791 9.32127 1.63823 7.72733 1.67445C6.13339 1.71068 4.61477 2.36002 3.4874 3.4874C2.36002 4.61477 1.71068 6.13339 1.67445 7.72733C1.63823 9.32127 2.21791 10.8678 3.2929 12.0452C4.3679 13.2227 5.85545 13.9403 7.4461 14.0489C9.03675 14.1575 10.608 13.6487 11.8331 12.6283L15.3529 16.1489C15.4052 16.2011 15.4672 16.2426 15.5355 16.2709C15.6038 16.2991 15.677 16.3137 15.7509 16.3137C15.8248 16.3137 15.898 16.2991 15.9663 16.2709C16.0346 16.2426 16.0966 16.2011 16.1489 16.1489C16.2011 16.0966 16.2426 16.0346 16.2709 15.9663C16.2991 15.898 16.3137 15.8248 16.3137 15.7509C16.3137 15.677 16.2991 15.6038 16.2709 15.5355C16.2426 15.4672 16.2011 15.4052 16.1489 15.3529ZM2.81339 7.87589C2.81339 6.87462 3.1103 5.89584 3.66658 5.06332C4.22285 4.23079 5.01351 3.58192 5.93856 3.19875C6.86361 2.81558 7.88151 2.71533 8.86354 2.91067C9.84557 3.10601 10.7476 3.58816 11.4556 4.29616C12.1636 5.00417 12.6458 5.90622 12.8411 6.88825C13.0365 7.87028 12.9362 8.88818 12.553 9.81323C12.1699 10.7383 11.521 11.5289 10.6885 12.0852C9.85594 12.6415 8.87716 12.9384 7.87589 12.9384C6.53369 12.9369 5.24689 12.4031 4.29781 11.454C3.34873 10.5049 2.81488 9.21809 2.81339 7.87589Z" fill="#686868"/>
          </svg>
          <input
            ref={searchRef}
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search stock or Orders"
            className="flex-1 text-[11px] font-medium font-['Inter',sans-serif] text-black bg-transparent outline-none placeholder:text-[#686868] placeholder:font-medium"
          />
          <div className="flex items-center gap-1 flex-shrink-0">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="flex-shrink-0">
              <path d="M11.25 9H10V7H11.25C11.695 7 12.13 6.86804 12.5 6.62081C12.87 6.37357 13.1584 6.02217 13.3287 5.61104C13.499 5.19991 13.5436 4.74751 13.4568 4.31105C13.37 3.87459 13.1557 3.47368 12.841 3.15901C12.5263 2.84434 12.1254 2.63005 11.689 2.54323C11.2525 2.45642 10.8001 2.50097 10.389 2.67127C9.97783 2.84157 9.62643 3.12996 9.3792 3.49997C9.13196 3.86998 9 4.30499 9 4.75V6H7V4.75C7 4.30499 6.86804 3.86998 6.62081 3.49997C6.37357 3.12996 6.02217 2.84157 5.61104 2.67127C5.19991 2.50097 4.74751 2.45642 4.31105 2.54323C3.87459 2.63005 3.47368 2.84434 3.15901 3.15901C2.84434 3.47368 2.63005 3.87459 2.54323 4.31105C2.45642 4.74751 2.50097 5.19991 2.67127 5.61104C2.84157 6.02217 3.12996 6.37357 3.49997 6.62081C3.86998 6.86804 4.30499 7 4.75 7H6V9H4.75C4.30499 9 3.86998 9.13196 3.49997 9.3792C3.12996 9.62643 2.84157 9.97783 2.67127 10.389C2.50097 10.8001 2.45642 11.2525 2.54323 11.689C2.63005 12.1254 2.84434 12.5263 3.15901 12.841C3.47368 13.1557 3.87459 13.37 4.31105 13.4568C4.74751 13.5436 5.19991 13.499 5.61104 13.3287C6.02217 13.1584 6.37357 12.87 6.62081 12.5C6.86804 12.13 7 11.695 7 11.25V10H9V11.25C9 11.695 9.13196 12.13 9.3792 12.5C9.62643 12.87 9.97783 13.1584 10.389 13.3287C10.8001 13.499 11.2525 13.5436 11.689 13.4568C12.1254 13.37 12.5263 13.1557 12.841 12.841C13.1557 12.5263 13.37 12.1254 13.4568 11.689C13.5436 11.2525 13.499 10.8001 13.3287 10.389C13.1584 9.97783 12.87 9.62643 12.5 9.3792C12.13 9.13196 11.695 9 11.25 9ZM10 4.75C10 4.50277 10.0733 4.2611 10.2107 4.05554C10.348 3.84998 10.5432 3.68976 10.7716 3.59515C11.0001 3.50054 11.2514 3.47579 11.4939 3.52402C11.7363 3.57225 11.9591 3.6913 12.1339 3.86612C12.3087 4.04093 12.4278 4.26366 12.476 4.50614C12.5242 4.74861 12.4995 4.99995 12.4049 5.22836C12.3102 5.45676 12.15 5.65199 11.9445 5.78934C11.7389 5.92669 11.4972 6 11.25 6H10V4.75ZM3.5 4.75C3.5 4.41848 3.6317 4.10054 3.86612 3.86612C4.10054 3.6317 4.41848 3.5 4.75 3.5C5.08152 3.5 5.39946 3.6317 5.63388 3.86612C5.86831 4.10054 6 4.41848 6 4.75V6H4.75C4.41848 6 4.10054 5.86831 3.86612 5.63388C3.6317 5.39946 3.5 5.08152 3.5 4.75ZM6 11.25C6 11.4972 5.92669 11.7389 5.78934 11.9445C5.65199 12.15 5.45676 12.3102 5.22836 12.4049C4.99995 12.4995 4.74861 12.5242 4.50614 12.476C4.26366 12.4278 4.04093 12.3087 3.86612 12.1339C3.6913 11.9591 3.57225 11.7363 3.52402 11.4939C3.47579 11.2514 3.50054 11.0001 3.59515 10.7716C3.68976 10.5432 3.84998 10.348 4.05554 10.2107C4.2611 10.0733 4.50277 10 4.75 10H6V11.25ZM7 7H9V9H7V7ZM11.25 12.5C10.9185 12.5 10.6005 12.3683 10.3661 12.1339C10.1317 11.8995 10 11.5815 10 11.25V10H11.25C11.5815 10 11.8995 10.1317 12.1339 10.3661C12.3683 10.6005 12.5 10.9185 12.5 11.25C12.5 11.5815 12.3683 11.8995 12.1339 12.1339C11.8995 12.3683 11.5815 12.5 11.25 12.5Z" fill="#686868"/>
            </svg>
            <span className="text-[12px] text-[#686868] font-['Inter',sans-serif] font-normal">+ F</span>
          </div>
        </div>

        {/* Filters */}
        <div className="ml-auto flex items-center gap-3">
          {catalogFilters.map(({ label, values, setValues, options }) => {
            const isOpen = openCatalogFilter === label;
            const hasSelection = values.length > 0;
            const isShippingState = label === "Shipping State";
            const isDosage = label === "Dosage";
            const isAreaOfTreatment = label === "Area of Treatment";
            const isCountCheckboxFilter = isDosage || isAreaOfTreatment;
            const buttonLabel = isShippingState && hasSelection ? values[0] : label;
            return (
              <div key={label} className="relative">
                <button
                  onClick={() => setOpenCatalogFilter(isOpen ? null : label)}
                  className={`flex h-[34px] cursor-pointer items-center gap-2 rounded-[5px] border bg-white px-2.5 text-[13px] font-semibold leading-none shadow-[0_1px_2px_rgba(16,24,40,0.08)] transition-colors ${
                    hasSelection
                      ? "border-[#cfd8d4] text-[#344054]"
                      : "border-[#d8dee8] text-[#344054] hover:border-[#c7d0dc]"
                  }`}
                >
                  {buttonLabel}
                  <ChevronsUpDown size={14} strokeWidth={1.8} className="text-[#344054]" />
                </button>

                {isOpen && (
                  <div className={`absolute top-10 z-20 overflow-hidden rounded-[6px] border border-[#d7dee8] bg-white shadow-[0_18px_40px_rgba(16,24,40,0.16)] ${
                    isDosage ? "right-0 w-[180px]" : isAreaOfTreatment ? "left-0 w-[220px]" : "left-0 w-[240px]"
                  }`}>
                    <div className="border-b border-[#e7ebf0] p-2">
                      <div className="flex h-[34px] items-center gap-2 rounded-[5px] border border-[#cfd8e3] bg-white px-2">
                        <Search size={15} strokeWidth={1.9} className="text-[#344054]" />
                        <input
                          value={catalogFilterSearch[label] ?? ""}
                          onChange={(e) => setCatalogFilterSearch(prev => ({ ...prev, [label]: e.target.value }))}
                          autoFocus
                          className="h-full min-w-0 flex-1 bg-transparent text-[13px] font-medium text-[#344054] outline-none placeholder:text-[#98a2b3]"
                        />
                      </div>
                    </div>
                    <div className="max-h-[330px] overflow-y-auto py-1">
                      {options
                        .filter(option => option.toLowerCase().includes((catalogFilterSearch[label] ?? "").toLowerCase()))
                        .map(option => {
                        const checked = values.includes(option);
                        if (isCountCheckboxFilter) {
                          const count = isDosage ? (dosageCounts[option] ?? 0) : (areaCounts[option] ?? 0);
                          const displayOption = option === "Iv Bag 15" ? "Iv Bag" : option;
                          return (
                            <label
                              key={option}
                              className="flex cursor-pointer items-center gap-2 px-4 py-2 text-[13px] font-medium text-[#344054] transition-colors hover:bg-[#f6f8fa]"
                            >
                              <input
                                type="checkbox"
                                checked={checked}
                                onChange={() => {
                                  setValues(prev => (
                                    prev.includes(option)
                                      ? prev.filter(value => value !== option)
                                      : [...prev, option]
                                  ));
                                }}
                                className="size-3.5 rounded border-[#a8afb8] accent-[#344054]"
                              />
                              <span>{displayOption} ({count})</span>
                            </label>
                          );
                        }
                        return (
                          <button
                            key={option}
                            onClick={() => {
                              if (isShippingState) {
                                setValues([option]);
                                setOpenCatalogFilter(null);
                                return;
                              }
                              setValues(prev => (
                                prev.includes(option)
                                  ? prev.filter(value => value !== option)
                                  : [...prev, option]
                              ));
                            }}
                            className="flex w-full cursor-pointer items-center gap-3 px-4 py-2 text-left text-[13px] font-medium text-[#344054] transition-colors hover:bg-[#f6f8fa]"
                          >
                            <span className="flex-1">{option}</span>
                            {checked && <CheckCircle2 size={14} strokeWidth={2.4} className="fill-[#475467] text-white" />}
                          </button>
                        );
                      })}
                      {options.filter(option => option.toLowerCase().includes((catalogFilterSearch[label] ?? "").toLowerCase())).length === 0 && (
                        <div className="px-4 py-3 text-[13px] font-medium text-[#98a2b3]">No results</div>
                      )}
                    </div>
                    {hasSelection && (
                      <button
                        onClick={() => setValues([])}
                        className="w-full cursor-pointer border-t border-[#e7ebf0] px-4 py-2.5 text-left text-[12px] font-semibold text-[#667085] transition-colors hover:bg-[#f6f8fa] hover:text-[#183229]"
                      >
                        Clear {label}
                      </button>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="mb-5 flex flex-wrap items-center gap-2">
        <p className="mr-1 text-[10px] font-semibold uppercase tracking-widest text-[#9d9d9d]">
          Pharmacies (6)
        </p>
        {PHARMACIES_MULTI.map(pharmacy => {
          const isActive = activePharmacy === pharmacy.name;
          return (
            <button
              key={pharmacy.name}
              onClick={() => setActivePharmacy(pharmacy.name)}
              className={`flex items-center gap-2 rounded-full border bg-white px-3 py-1.5 text-[12px] font-medium transition-all ${
                isActive
                  ? "border-2 border-[#183229] text-[#183229]"
                  : "border-[#e0e0e0] text-[#1a1a1a] hover:border-[#183229]/40"
              }`}
            >
              {pharmacy.name}
              <span className={`text-[11px] font-semibold ${isActive ? "text-[#183229]" : "text-[#9d9d9d]"}`}>
                {pharmacy.count}
              </span>
              {pharmacy.name !== "All Pharmacies" && supportsMultiPatientShipping(pharmacy.name) && (
                <span className="group relative inline-flex items-center gap-1 rounded-full bg-[#e7f5ec] px-2 py-0.5 text-[9px] font-semibold text-[#2f704c]">
                  <CheckCircle2 size={10} />
                  Multi-shipping
                  <span className="pointer-events-none absolute bottom-[calc(100%+8px)] left-1/2 z-40 hidden w-56 -translate-x-1/2 rounded-[7px] bg-[#183229] px-3 py-2 text-left text-[10px] font-medium leading-relaxed text-white shadow-lg group-hover:block">
                    One shipping fee covers prescriptions for multiple patients ordered from this pharmacy.
                    <span className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-[#183229]" />
                  </span>
                </span>
              )}
            </button>
          );
        })}
      </div>

      {selectedCatalogFilterCount > 0 && (
        <div className="-mt-2 mb-5 flex flex-wrap items-center gap-2">
          {catalogFilters.flatMap(({ label, values, setValues }) => (
            values.map(value => (
              <button
                key={`${label}-${value}`}
                onClick={() => setValues(prev => prev.filter(item => item !== value))}
                className="flex cursor-pointer items-center gap-1.5 rounded-full border border-[#cfe3d7] bg-[#f2f7f4] px-3 py-1.5 text-[12px] font-medium text-[#183229] transition-colors hover:border-[#183229]/40"
              >
                <span className="text-[#667085]">{label}:</span>
                {value}
                <XCircle size={13} strokeWidth={1.8} />
              </button>
            ))
          ))}
          <button
            onClick={clearCatalogFilters}
            className="cursor-pointer text-[12px] font-medium text-[#667085] transition-colors hover:text-[#183229]"
          >
            Clear all
          </button>
        </div>
      )}

      {/* Popular Products */}
      {(() => {
        const q = search.toLowerCase();
        const filtered = POPULAR_CARDS.filter(c => {
          const matchesSearch = !q || c.name.toLowerCase().includes(q) || c.price.toLowerCase().includes(q);
          const matchesPharmacy = activePharmacy === "All Pharmacies" || c.pharmacy === activePharmacy;
          return matchesSearch && matchesPharmacy && matchesCatalogFilters(c);
        });
        if (filtered.length === 0) return null;
        return (
          <section className="mb-6">
            <h2 className="font-['Inter',sans-serif] font-medium text-black text-[18px] mb-4 leading-none">Popular Products</h2>
            <div className="flex gap-[13px] overflow-x-auto pb-1">
              {filtered.map(renderCard)}
            </div>
          </section>
        );
      })()}

      {/* All Products */}
      {(() => {
        const q = search.toLowerCase();
        const filtered = ALL_CARDS.filter(c => {
          const matchesSearch = !q || c.name.toLowerCase().includes(q) || c.price.toLowerCase().includes(q);
          const matchesPharmacy = activePharmacy === "All Pharmacies" || c.pharmacy === activePharmacy;
          return matchesSearch && matchesPharmacy && matchesCatalogFilters(c);
        });
        return (
          <section>
            <h2 className="font-['Inter',sans-serif] font-medium text-black text-[18px] mb-4 leading-none">
              {search ? `Results for "${search}"` : "All Products"}
              {search && <span className="text-[14px] text-[#9d9d9d] font-normal ml-2">({filtered.length} found)</span>}
            </h2>
            {filtered.length > 0 ? (
              <div className="flex gap-[13px] overflow-x-auto pb-1">
                {filtered.map(renderCard)}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <Search size={28} className="text-[#d0d0d0] mb-3" />
                <p className="text-[14px] font-semibold text-[#1a1a1a] mb-1">No products found</p>
                <p className="text-[12px] text-[#9d9d9d]">Try a different search term</p>
              </div>
            )}
          </section>
        );
      })()}
    </>
  );
}

// ─── Product Detail ───────────────────────────────────────────────────────────

function OptionPill({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`h-11 rounded-[7px] border px-5 text-[12px] font-medium transition-colors ${
        selected
          ? "border-2 border-[#111] bg-white text-[#111]"
          : "border-[#c8c8c8] bg-white text-[#333] hover:border-[#111]/50"
      }`}
    >
      {label}
    </button>
  );
}

function ProductDetailPage({
  onNavigate,
  cartMode,
  setCartMode,
  onAddToPatientCart,
  product,
}: {
  onNavigate: (p: Page) => void;
  cartMode: CartMode;
  setCartMode: (mode: CartMode) => void;
  onAddToPatientCart: (entries: PatientCartEntry[]) => void;
  product: CardDef;
}) {
  const defaultSize = product.dosage === "Gel" ? "30g Tube" : product.dosage === "Capsule" ? "30 Capsules" : "1 (5mL) Vial";
  const defaultStrength = product.price.includes("mg") ? product.price : product.dosage === "Gel" ? "0.025%" : "5mg/mL";
  const [size, setSize] = useState(defaultSize);
  const [strength, setStrength] = useState(defaultStrength);
  const [injType, setInjType] = useState(product.dosage === "Injection" ? "Intramuscular" : product.dosage);
  const [pharmacy, setPharmacy] = useState(product.pharmacy);
  const [qty, setQty] = useState(1);
  const [suppliesOpen, setSuppliesOpen] = useState(false);
  const [patientPickerOpen, setPatientPickerOpen] = useState(false);
  const [patientSearch, setPatientSearch] = useState("");
  const [paymentChoice, setPaymentChoice] = useState<"patient" | "clinic" | "card">("patient");
  const [shippingChoice, setShippingChoice] = useState<"patient" | "clinic">("clinic");
  const [selectedPatientIds, setSelectedPatientIds] = useState<Set<number>>(new Set());
  const [patientQuantities, setPatientQuantities] = useState<Record<number, number>>({});
  const [expandedPatientIds, setExpandedPatientIds] = useState<Set<number>>(new Set());
  const [addedItemCount, setAddedItemCount] = useState<number | null>(null);
  const [activeInfoTab, setActiveInfoTab] = useState<"overview" | "formula" | "dosage" | "safety">("overview");
  const configurationCardRef = useRef<HTMLDivElement>(null);
  const [productCardHeight, setProductCardHeight] = useState(825);
  const { addCartItems } = useCartSummary();
  const { runWithAppLoader } = useAppLoading();

  useEffect(() => {
    setSize(defaultSize);
    setStrength(defaultStrength);
    setInjType(product.dosage === "Injection" ? "Intramuscular" : product.dosage);
    setPharmacy(product.pharmacy);
    setQty(1);
    setPaymentChoice("patient");
    setShippingChoice("clinic");
    setSelectedPatientIds(new Set());
    setPatientQuantities({});
    setExpandedPatientIds(new Set());
    setAddedItemCount(null);
  }, [defaultSize, defaultStrength, product.dosage, product.id, product.pharmacy]);

  useLayoutEffect(() => {
    if (configurationCardRef.current) {
      setProductCardHeight(configurationCardRef.current.offsetHeight);
    }
  }, [cartMode]);

  const baseProductPrice = Number.parseFloat(product.price.replace(/[^0-9.]/g, "")) || 35.88;
  const pharmacies = [
    { name: product.pharmacy, turnaround: "1-2 business days", price: baseProductPrice },
    { name: product.pharmacy === "Rush Pharmacy FL" ? "Optimal Balance Pharmacy" : "Rush Pharmacy FL", turnaround: "1-2 business days", price: baseProductPrice + 20 },
  ];
  const selectedPharmacy = pharmacies.find(option => option.name === pharmacy) ?? pharmacies[0];
  const selectedPatientCount = selectedPatientIds.size;
  const selectedItemCount = [...selectedPatientIds].reduce((sum, id) => sum + (patientQuantities[id] ?? 1), 0);
  const isMultiPatientOrder = cartMode === "multi" && selectedPatientIds.size > 1;
  const patientMatches = PATIENTS
    .map((patient, id) => ({ patient, id }))
    .filter(({ patient }) => {
      const query = patientSearch.trim().toLowerCase();
      return !query || `${patient.firstName} ${patient.lastName} ${patient.birthDate} ${patient.primaryPhone}`.toLowerCase().includes(query);
    })
    .slice(0, 6);

  function togglePatient(id: number) {
    setAddedItemCount(null);
    setSelectedPatientIds(current => {
      if (shippingChoice === "patient" && !current.has(id)) {
        setPatientQuantities({ [id]: 1 });
        return new Set([id]);
      }
      const next = new Set(current);
      if (next.has(id)) {
        next.delete(id);
        setPatientQuantities(quantities => {
          const updated = { ...quantities };
          delete updated[id];
          return updated;
        });
      } else {
        next.add(id);
        setPatientQuantities(quantities => ({ ...quantities, [id]: quantities[id] ?? 1 }));
      }
      return next;
    });
  }

  function selectShippingChoice(choice: "patient" | "clinic") {
    setShippingChoice(choice);
    setAddedItemCount(null);
    if (choice === "patient" && selectedPatientIds.size > 1) {
      const firstPatientId = [...selectedPatientIds][0];
      setSelectedPatientIds(new Set([firstPatientId]));
      setPatientQuantities(current => ({ [firstPatientId]: current[firstPatientId] ?? 1 }));
      setExpandedPatientIds(current => new Set(current.has(firstPatientId) ? [firstPatientId] : []));
    }
  }

  function updatePatientQuantity(id: number, change: number) {
    setPatientQuantities(current => ({
      ...current,
      [id]: Math.max(1, (current[id] ?? 1) + change),
    }));
  }

  function togglePatientDetails(id: number) {
    setExpandedPatientIds(current => {
      const next = new Set(current);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  function addToCart() {
    if (selectedPatientCount === 0) return;
    const nextCartMode: CartMode = selectedPatientCount > 1 ? "multi" : "single";
    setCartMode(nextCartMode);
    const itemCount = Math.max(selectedItemCount, 1);
    runWithAppLoader(() => {
      addCartItems(itemCount, {
        id: product.id,
        name: product.name,
        price: `$${selectedPharmacy.price.toFixed(2)}`,
        img: product.img,
        qty: itemCount,
      });
      onAddToPatientCart([...selectedPatientIds].map((patientId, index) => ({
        id: Date.now() + index,
        patientId,
        product,
        qty: patientQuantities[patientId] ?? 1,
        pharmacy: selectedPharmacy.name,
        size,
        strength,
        injectionType: injType,
        unitPrice: selectedPharmacy.price,
      })));
      setAddedItemCount(itemCount);
      setSize(defaultSize);
      setStrength(defaultStrength);
      setInjType(product.dosage === "Injection" ? "Intramuscular" : product.dosage);
      setPharmacy(product.pharmacy);
      setQty(1);
      setSuppliesOpen(false);
      setPatientPickerOpen(false);
      setPatientSearch("");
      setSelectedPatientIds(new Set());
      setPatientQuantities({});
      setExpandedPatientIds(new Set());
    });
  }

  return (
    <>
      <div className="pl-[15px]">
      <div className="-mt-4 mb-[39px]">
        <h1 className="text-[32px] font-medium leading-tight text-[#111]">Products</h1>
        <p className="mt-2 text-[11px] font-normal text-[#4b4b4b]">
          <button onClick={() => onNavigate("products")} className="text-[11px] font-normal hover:underline">Home</button>, <button onClick={() => onNavigate("products")} className="text-[11px] font-normal hover:underline">Catalog</button>, <span className="text-[11px] font-normal">{product.name}</span>
        </p>
      </div>
      <div className="grid max-w-[1073px] items-start gap-10 xl:grid-cols-[minmax(0,1.244fr)_minmax(0,1fr)]">
        <div className="min-w-0">
          <div className="flex h-[600px] items-center justify-center overflow-hidden rounded-[18px] border border-[#e4e4e4] bg-[#f8f8f8] p-16">
            <img src={product.img} alt={product.name} className="h-full max-h-[410px] w-full object-contain mix-blend-multiply" />
          </div>
          <div className="mt-7 flex flex-wrap gap-2">
            {["Sterile", "Refrigerated", "Controlled Substance", "Protect from Light"].map(tag => (
              <span key={tag} className="rounded-full border border-[#dedede] bg-white px-3.5 py-1.5 text-[12px] font-medium text-[#777] shadow-sm">{tag}</span>
            ))}
          </div>
        </div>

        <div ref={configurationCardRef} className="-mt-[23px] min-w-0">
          <h1 className="text-[30px] font-medium leading-tight text-[#111]">{product.name}</h1>
          <p className="mt-1.5 max-w-[500px] text-[13px] leading-[1.45] text-[#8a8a8a]">A compounded {product.dosage.toLowerCase()} developed for personalized {product.areaOfTreatment.toLowerCase()} treatment and patient care.</p>
          <p className="mt-5 text-[25px] font-medium text-[#111]">${baseProductPrice.toFixed(2)}</p>

          <div className="mt-2 border-t border-[#ededed] pt-2">
            <p className="mb-2 text-[12px] font-medium text-[#111]">Size</p>
            <div className="flex flex-wrap gap-2">
              {(product.dosage === "Gel" ? ["15g Tube", "30g Tube", "60g Tube"] : product.dosage === "Capsule" ? ["30 Capsules", "60 Capsules", "90 Capsules"] : ["1 (5mL) Vial", "1 (10mL) Vial", "1 (30mL) Vial"]).map(option => <OptionPill key={option} label={option} selected={size === option} onClick={() => setSize(option)} />)}
            </div>
          </div>

          <div className="mt-3 border-t border-[#ededed] pt-2">
            <p className="mb-2 text-[12px] font-medium text-[#111]">Strength</p>
            <div className="flex flex-wrap gap-2">
              {[defaultStrength, product.dosage === "Gel" ? "0.05%" : "1mg/mL"].filter((option, index, list) => list.indexOf(option) === index).map(option => <OptionPill key={option} label={option} selected={strength === option} onClick={() => setStrength(option)} />)}
            </div>
          </div>

          <div className="mt-3 border-t border-[#ededed] pt-2">
            <p className="mb-2 text-[12px] font-medium text-[#111]">{product.dosage === "Injection" ? "Injection Type" : "Form"}</p>
            <div className="flex flex-wrap gap-2">
              {(product.dosage === "Injection" ? ["Subcutaneous", "Intramuscular"] : [product.dosage]).map(option => <OptionPill key={option} label={option} selected={injType === option} onClick={() => setInjType(option)} />)}
            </div>
          </div>

          <div className="mt-3 border-t border-[#ededed] pt-2">
            <p className="mb-2 text-[12px] font-medium text-[#111]">Pharmacy</p>
            <div className="space-y-2">
              {pharmacies.slice(0, 2).map(option => {
                const selected = pharmacy === option.name;
                return (
                  <button key={option.name} onClick={() => setPharmacy(option.name)} className={`grid w-full grid-cols-[minmax(0,1fr)_90px] items-center rounded-[8px] border px-3 py-3 text-left transition-colors ${selected ? "border-2 border-[#202c27] bg-[#fcfdfc]" : "border-[#bdbdbd] bg-white hover:border-[#555]"}`}>
                    <span className="min-w-0">
                      <span className="block truncate text-[12px] font-medium text-[#111]">{option.name}</span>
                      <span className="mt-0.5 block text-[9px] text-[#777]">Beyond use 90 days</span>
                    </span>
                    <span className="text-right">
                      <span className="block text-[12px] font-medium text-[#111]">${option.price.toFixed(2)}</span>
                      <span className="block text-[8px] leading-tight text-[#777]">1-2 Days<br />Processing</span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-4 border-t border-[#ededed] pt-4">
            <p className="text-[12px] font-medium text-[#111]">Payment</p>
            <p className="mt-1 text-[12px] text-[#252525]">Select the payment method for the prescription</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <button onClick={() => setPaymentChoice("patient")} className={`inline-flex h-9 items-center gap-2 rounded-full border px-3 text-[11px] font-semibold transition-colors ${paymentChoice === "patient" ? "border-2 border-[#202020] bg-[#f6f4f5] text-[#202020]" : "border-[#d8dedd] bg-white text-[#6f7782]"}`}>
                Pay by Patient <User size={13} />
              </button>
              <button onClick={() => setPaymentChoice("clinic")} className={`inline-flex h-9 items-center gap-2 rounded-full border px-3 text-[11px] font-semibold transition-colors ${paymentChoice === "clinic" ? "border-2 border-[#202020] bg-[#f6f4f5] text-[#202020]" : "border-[#d8dedd] bg-white text-[#6f7782]"}`}>
                Pay by Clinic <Building2 size={13} />
              </button>
              <button disabled className="inline-flex h-9 cursor-not-allowed items-center gap-1.5 rounded-full border border-[#d8dedd] bg-white px-3 text-[11px] font-semibold text-[#9a9fa5] opacity-70">
                <Plus size={13} /> Credit Card
              </button>
            </div>
          </div>

          <div className="mt-4 border-t border-[#ededed] pt-4">
            <p className="text-[12px] font-medium text-[#111]">Shipping</p>
            <p className="mt-1 text-[12px] text-[#252525]">Choose where to ship the prescription</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <button disabled={selectedPatientCount > 1} onClick={() => selectShippingChoice("patient")} className={`inline-flex h-9 items-center gap-2 rounded-full border px-3 text-[11px] font-semibold transition-colors ${selectedPatientCount > 1 ? "cursor-not-allowed border-[#e0e2e1] bg-[#f7f7f6] text-[#a7aaa8] opacity-70" : shippingChoice === "patient" ? "border-2 border-[#202020] bg-[#f6f4f5] text-[#202020]" : "border-[#d8dedd] bg-white text-[#6f7782]"}`}>
                Ship to Patient <User size={13} />
              </button>
              <button onClick={() => selectShippingChoice("clinic")} className={`inline-flex h-9 items-center gap-2 rounded-full border px-3 text-[11px] font-semibold transition-colors ${shippingChoice === "clinic" ? "border-2 border-[#202020] bg-[#f6f4f5] text-[#202020]" : "border-[#d8dedd] bg-white text-[#6f7782]"}`}>
                Ship to Clinic <Building2 size={13} />
              </button>
            </div>
            <p className="mt-2 text-[10px] text-[#7a837f]">{shippingChoice === "clinic" ? "You can select multiple patients for one clinic shipment." : "You can select one patient for this shipment."}</p>
          </div>

          <div className="relative mt-6">
            <button onClick={() => setPatientPickerOpen(current => !current)} className="flex h-11 w-full items-center justify-center rounded-full border border-[#111] bg-white text-[12px] font-medium text-[#111] hover:bg-[#fafafa]">
              {selectedPatientCount === 0 ? "Choose patient" : shippingChoice === "clinic" ? "Add another patient" : "Change patient"}
            </button>
            {patientPickerOpen && (
              <div className="absolute inset-x-0 top-12 z-30 overflow-hidden rounded-[10px] border border-[#d8dfdc] bg-white shadow-xl">
                <div className="flex h-10 items-center gap-2 border-b border-[#e8e3df] px-3">
                  <Search size={14} className="text-[#7b8580]" />
                  <input autoFocus value={patientSearch} onChange={event => setPatientSearch(event.target.value)} placeholder="Search patients" className="min-w-0 flex-1 bg-transparent text-[12px] outline-none" />
                </div>
                <div className="max-h-[220px] overflow-y-auto p-1.5">
                  {patientMatches.map(({ patient, id }) => {
                    const selected = selectedPatientIds.has(id);
                    return (
                      <button key={id} onClick={() => { togglePatient(id); setPatientPickerOpen(false); }} className={`w-full rounded-[7px] px-3 py-2.5 text-left transition-colors ${selected ? "bg-[#f3f5f4]" : "hover:bg-[#f8f7f5]"}`}>
                        <span className="flex items-center gap-2">
                          <span className={`block text-[12px] font-semibold ${selected ? "text-[#8a9390]" : "text-[#1a1a1a]"}`}>{patient.firstName} {patient.lastName}</span>
                          {selected && <span className="rounded-full bg-[#dff8fb] px-2 py-0.5 text-[8px] font-bold uppercase tracking-[0.04em] text-[#0095a8]">In cart</span>}
                        </span>
                        <span className={`mt-0.5 block text-[10px] ${selected ? "text-[#9ba3a0]" : "text-[#777]"}`}>{patient.birthDate} · {patient.gender}</span>
                      </button>
                    );
                  })}
                </div>
                <div className="border-t border-[#e8e3df] p-2">
                  <button onClick={() => onNavigate("users")} className="flex h-9 w-full items-center justify-center gap-1.5 rounded-[7px] border border-dashed border-[#b7c2bd] bg-[#fafcfb] text-[11px] font-semibold text-[#183229] transition-colors hover:border-[#183229] hover:bg-[#eef5f1]">
                    <Plus size={13} /> Create new patient
                  </button>
                </div>
              </div>
            )}
          </div>

          {selectedPatientCount > 0 && (
            <div className="mt-3 overflow-hidden rounded-[11px] border border-[#dfe5e2] bg-white shadow-[0_2px_8px_rgba(24,50,41,0.05)]">
              <div className="flex items-center justify-between border-b border-[#dfe5e2] bg-[#f1f5f3] px-3.5 py-2.5">
                <div>
                  <p className="text-[11px] font-semibold text-[#1a1a1a]">Selected patients</p>
                  <p className="mt-0.5 text-[9px] text-[#7a837f]">Set the quantity for each prescription.</p>
                </div>
                <span className="rounded-full bg-[#183229] px-2 py-1 text-[9px] font-semibold text-white">{selectedItemCount} item{selectedItemCount === 1 ? "" : "s"}</span>
              </div>
              <div className="divide-y divide-[#e8ebe9]">
                {[...selectedPatientIds].map(id => {
                  const patient = PATIENTS[id];
                  const patientQty = patientQuantities[id] ?? 1;
                  const isExpanded = expandedPatientIds.has(id);
                  const patientAddress = [patient.address1, patient.address2, `${patient.city}, ${patient.state} ${patient.zip}`].filter(Boolean).join(", ");
                  return (
                    <div key={id} className="bg-white px-3.5 py-3 transition-colors hover:bg-[#fcfdfc]">
                      <div className="grid grid-cols-[minmax(0,1fr)_104px_28px] items-center gap-3">
                        <button onClick={() => togglePatientDetails(id)} className="flex min-w-0 items-center gap-2 text-left" aria-expanded={isExpanded}>
                          <span className="min-w-0">
                            <span className="block truncate text-[11px] font-semibold text-[#171917]">{patient.firstName} {patient.lastName}</span>
                            <span className="mt-0.5 block truncate text-[9px] text-[#7a837f]">DOB {patient.birthDate}</span>
                          </span>
                          <ChevronDown size={13} className={`shrink-0 text-[#777] transition-transform ${isExpanded ? "rotate-180" : ""}`} />
                        </button>
                        <div className="flex h-9 items-center justify-between rounded-[9px] border border-[#dedede] bg-white px-1">
                          <button onClick={() => updatePatientQuantity(id, -1)} disabled={patientQty === 1} className="flex size-7 items-center justify-center rounded-[7px] text-[#68736d] transition-colors hover:bg-[#eeeeee] disabled:opacity-35" aria-label={`Decrease quantity for ${patient.firstName}`}><Minus size={13} /></button>
                          <span className="min-w-5 text-center text-[12px] font-semibold text-[#1a1a1a]">{patientQty}</span>
                          <button onClick={() => updatePatientQuantity(id, 1)} className="flex size-7 items-center justify-center rounded-[7px] text-[#111] transition-colors hover:bg-[#eeeeee]" aria-label={`Increase quantity for ${patient.firstName}`}><Plus size={13} /></button>
                        </div>
                        <button onClick={() => togglePatient(id)} className="flex size-7 items-center justify-center rounded-[7px] text-[#a35b56] transition-colors hover:bg-[#f4e7e6]" aria-label={`Remove ${patient.firstName} ${patient.lastName}`}><Trash2 size={14} /></button>
                      </div>
                      {isExpanded && (
                        <div className="mt-2 rounded-[8px] border border-[#e4e8e6] bg-[#f7f9f8] px-3 py-2.5 text-[10px] leading-relaxed text-[#666]">
                          <div className="flex items-start gap-2"><MapPin size={12} className="mt-0.5 shrink-0 text-[#333]" /><span>{patientAddress}</span></div>
                          <div className="mt-1.5 flex items-center gap-2"><Phone size={12} className="shrink-0 text-[#333]" /><span>{patient.primaryPhone}</span></div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {addedItemCount !== null && (
            <div className="mt-3 flex items-center justify-center gap-2 rounded-[9px] bg-[#edf5f0] px-3 py-2.5 text-[11px] font-semibold text-[#315a47]">
              <CheckCircle2 size={15} strokeWidth={2} />
              {addedItemCount} {addedItemCount === 1 ? "product" : "products"} added to cart
            </div>
          )}

          <button onClick={addToCart} disabled={selectedPatientCount === 0} className="mt-2 flex h-11 w-full items-center justify-center gap-2 rounded-full bg-[#111] text-[12px] font-medium text-white transition-colors hover:bg-[#28312d] disabled:cursor-not-allowed disabled:bg-[#b8b8b8]">
            Add {selectedItemCount > 1 ? `${selectedItemCount} items` : "to cart"} <ShoppingCart size={14} strokeWidth={1.5} />
          </button>

          <div className="mt-3 flex h-12 items-center rounded-[9px] bg-[#f7f7f7] px-4">
            <MapPin size={18} strokeWidth={1.6} className="mr-2 text-[#111]" />
            <span className="text-[9px] leading-tight text-[#777]">Delivered to<br /><strong className="text-[11px] font-semibold text-[#111]">Florida</strong></span>
            <button className="ml-auto text-[10px] font-medium text-[#333] hover:underline">Change Location</button>
          </div>
        </div>
      </div>

      <section className="mt-8 max-w-[1073px] overflow-hidden rounded-[12px] border border-[#e8e3df] bg-white">
        <div className="overflow-x-auto border-b border-[#e8e3df] px-5 sm:px-6">
          <div className="flex min-w-max gap-7" role="tablist" aria-label="Product information">
            {[
              { id: "overview", label: "Overview" },
              { id: "formula", label: "Formula & Benefits" },
              { id: "dosage", label: "Dosage" },
              { id: "safety", label: "Storage & Safety" },
            ].map(tab => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeInfoTab === tab.id}
                onClick={() => setActiveInfoTab(tab.id as typeof activeInfoTab)}
                className={`h-12 border-b-2 text-[12px] font-semibold transition-colors ${activeInfoTab === tab.id ? "border-[#183229] text-[#183229]" : "border-transparent text-[#737b77] hover:text-[#183229]"}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="px-5 py-6 sm:px-6 lg:px-8">
          {activeInfoTab === "overview" && (
            <div className="max-w-[1050px]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#708078]">Product reference</p>
              <h2 className="mt-1 text-[20px] font-semibold text-[#1a1a1a]">{product.name}</h2>
              <div className="mt-4 space-y-3 text-[13px] leading-6 text-[#4f5a55]">
                <p>{product.name} is a compounded {product.dosage.toLowerCase()} option used in personalized {product.areaOfTreatment.toLowerCase()} protocols. Available configurations may vary by strength, size, administration route, and dispensing pharmacy.</p>
                <p>The selected pharmacy prepares the medication according to the configuration and patient information supplied with the prescription.</p>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  ["Item", product.name],
                  ["Strength", strength],
                  ["Form", product.dosage],
                  ["Quantity", size],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-[8px] border border-[#e8e3df] bg-[#fbfaf8] p-3">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[#8c8c8c]">{label}</p>
                    <p className="mt-1 text-[12px] font-semibold text-[#1a1a1a]">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeInfoTab === "formula" && (
            <div className="max-w-[1050px]">
              <h2 className="text-[20px] font-semibold text-[#1a1a1a]">Ingredient breakdown & benefits</h2>
              <div className="mt-5 grid gap-3 lg:grid-cols-3">
                {[
                  { title: product.name, text: `Configured as ${strength} in a ${size} ${product.dosage.toLowerCase()} format.` },
                  { title: "Treatment area", text: `Prepared for personalized ${product.areaOfTreatment.toLowerCase()} protocols under prescriber direction.` },
                  { title: "Pharmacy preparation", text: `Dispensed by ${selectedPharmacy.name} using the selected product configuration.` },
                ].map(item => (
                  <article key={item.title} className="rounded-[8px] border border-[#e8e3df] p-4">
                    <div className="flex size-8 items-center justify-center rounded-[7px] bg-[#eef5f1] text-[#183229]"><Leaf size={15} /></div>
                    <h3 className="mt-3 text-[13px] font-semibold text-[#1a1a1a]">{item.title}</h3>
                    <p className="mt-2 text-[12px] leading-5 text-[#626d68]">{item.text}</p>
                  </article>
                ))}
              </div>
            </div>
          )}

          {activeInfoTab === "dosage" && (
            <div className="max-w-[1050px]">
              <h2 className="text-[20px] font-semibold text-[#1a1a1a]">Typical dosage and administration</h2>
              <p className="mt-2 text-[12px] leading-5 text-[#626d68]">Administration and dosing instructions are determined by the prescriber for the selected {product.dosage.toLowerCase()} configuration.</p>
              <div className="mt-5 overflow-x-auto rounded-[8px] border border-[#e8e3df]">
                <table className="w-full min-w-[720px] text-left text-[12px]">
                  <thead className="bg-[#f6f4f2] text-[10px] uppercase tracking-[0.08em] text-[#667085]">
                    <tr><th className="px-4 py-3">Goal</th><th className="px-4 py-3">Frequency</th><th className="px-4 py-3">Route</th><th className="px-4 py-3">Notes</th></tr>
                  </thead>
                  <tbody className="divide-y divide-[#e8e3df] text-[#39433f]">
                    <tr><td className="px-4 py-3 font-semibold">Standard protocol</td><td className="px-4 py-3">As prescribed</td><td className="px-4 py-3">{injType}</td><td className="px-4 py-3">{strength}</td></tr>
                    <tr><td className="px-4 py-3 font-semibold">Product form</td><td className="px-4 py-3">Patient specific</td><td className="px-4 py-3">{product.dosage}</td><td className="px-4 py-3">{size}</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeInfoTab === "safety" && (
            <div className="max-w-[1050px]">
              <h2 className="text-[20px] font-semibold text-[#1a1a1a]">Storage & safety</h2>
              <div className="mt-5 grid gap-3 md:grid-cols-3">
                {[
                  ["Beyond use", "90 days unopened or 28 days after first puncture"],
                  ["Storage", "Refrigerate at 36°F to 46°F. Protect from light. Do not freeze."],
                  ["Status", "503A compounded, sterile preparation"],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-[8px] border border-[#e8e3df] bg-[#fbfaf8] p-4">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[#8c8c8c]">{label}</p>
                    <p className="mt-2 text-[12px] font-semibold leading-5 text-[#1a1a1a]">{value}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex items-start gap-3 rounded-[8px] border border-[#f0bd67] bg-[#fff7e8] p-4">
                <AlertCircle size={17} className="mt-0.5 shrink-0 text-[#a45b00]" />
                <div>
                  <h3 className="text-[13px] font-semibold text-[#6f3e00]">Safety warning</h3>
                  <p className="mt-1 text-[12px] leading-5 text-[#744d1c]"><strong>For subcutaneous use only.</strong> Use a fresh sterile needle for every administration. Discard 28 days after first puncture or by the beyond-use date, whichever comes first. Use only as directed by a licensed prescriber.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      </div>
    </>
  );
}

// ─── Dashboard ────────────────────────────────────────────────────────────────

const RECENT_ORDERS = [
  { id: "ORD-0041", patient: "Sarah M.", product: "NAD+ Injection", status: "Delivered", date: "Jul 8", total: "$55.88" },
  { id: "ORD-0040", patient: "John R.", product: "Testosterone Cyp", status: "Shipped", date: "Jul 7", total: "$135.99" },
  { id: "ORD-0039", patient: "Emily K.", product: "Semaglutide", status: "Processing", date: "Jul 7", total: "$180.00" },
  { id: "ORD-0038", patient: "David L.", product: "BPC-157", status: "Pending", date: "Jul 6", total: "$75.00" },
  { id: "ORD-0037", patient: "Maria S.", product: "Sermorelin", status: "Delivered", date: "Jul 5", total: "$110.00" },
];

function DashboardPage({ onNavigate }: { onNavigate: (p: Page) => void }) {
  return (
    <>
      <Header title="Dashboard" onNavigate={onNavigate} />

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4 mb-7">
        <StatCard label="Total Orders" value="1,284" delta="12.5%" positive icon={Package} color="bg-[#1a1a1a]" />
        <StatCard label="Active Patients" value="348" delta="3.2%" positive icon={Users} color="bg-[#183229]" />
        <StatCard label="Revenue (MTD)" value="$24,192" delta="8.7%" positive icon={CreditCard} color="bg-[#7547ff]" />
        <StatCard label="Open Tickets" value="17" delta="2" icon={MessageSquare} color="bg-[#ff5454]" />
      </div>

      {/* Two-column: Recent Orders + Quick Stats */}
      <div className="grid grid-cols-[1fr_320px] gap-5 mb-6">
        {/* Recent Orders */}
        <div className="bg-card border border-[#eaeaea] rounded-xl p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[15px] font-semibold text-[#1a1a1a]">Recent Orders</h3>
            <button
              onClick={() => onNavigate("orders")}
              className="text-[12px] text-[#9d9d9d] hover:text-[#1a1a1a] transition-colors"
            >
              View all →
            </button>
          </div>
          <table className="w-full">
            <thead>
              <tr>
                {["Order ID", "Patient", "Product", "Status", "Date", "Total"].map((h) => (
                  <th key={h} className="text-left text-[11px] text-[#9d9d9d] font-medium pb-3">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {RECENT_ORDERS.map((o) => (
                <tr key={o.id} className="border-t border-[#f0f0f0]">
                  <td className="py-3 text-[12px] font-medium text-[#1a1a1a]">{o.id}</td>
                  <td className="py-3 text-[12px] text-[#1a1a1a]">{o.patient}</td>
                  <td className="py-3 text-[12px] text-[#9d9d9d]">{o.product}</td>
                  <td className="py-3">
                    <span className="flex items-center gap-1.5 text-[11px]">
                      <StatusDot status={o.status} />
                      {o.status}
                    </span>
                  </td>
                  <td className="py-3 text-[12px] text-[#9d9d9d]">{o.date}</td>
                  <td className="py-3 text-[12px] font-medium text-[#1a1a1a]">{o.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Activity */}
        <div className="bg-card border border-[#eaeaea] rounded-xl p-5">
          <h3 className="text-[15px] font-semibold text-[#1a1a1a] mb-4">Activity</h3>
          <div className="space-y-3">
            {[
              { icon: CheckCircle2, text: "Order ORD-0041 delivered", time: "2h ago", color: "text-emerald-500" },
              { icon: Truck, text: "Order ORD-0040 shipped", time: "5h ago", color: "text-blue-500" },
              { icon: AlertCircle, text: "Low stock: BPC-157", time: "1d ago", color: "text-amber-500" },
              { icon: User, text: "New patient: Mark T.", time: "1d ago", color: "text-purple-500" },
              { icon: MessageSquare, text: "Ticket #89 opened", time: "2d ago", color: "text-[#9d9d9d]" },
            ].map(({ icon: Icon, text, time, color }) => (
              <div key={text} className="flex items-start gap-3">
                <Icon size={14} className={`mt-0.5 flex-shrink-0 ${color}`} />
                <div className="flex-1">
                  <p className="text-[12px] text-[#1a1a1a]">{text}</p>
                  <p className="text-[10px] text-[#9d9d9d]">{time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Popular Products Row */}
      <div className="bg-card border border-[#eaeaea] rounded-xl p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-[15px] font-semibold text-[#1a1a1a]">Top Products</h3>
          <button onClick={() => onNavigate("products")} className="text-[12px] text-[#9d9d9d] hover:text-[#1a1a1a]">
            Browse catalog →
          </button>
        </div>
        <div className="flex gap-4">
          {ALL_PRODUCTS.slice(0, 6).map((p) => (
            <button
              key={p.id}
              onClick={() => onNavigate("product-detail")}
              className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-[#f9f0ea]/60 transition-colors group"
            >
              <div className="w-16 h-16 flex items-center justify-center">
                <img src={p.img} alt={p.name} className="h-full object-contain mix-blend-multiply" />
              </div>
              <p className="text-[10px] font-medium text-[#1a1a1a] text-center leading-tight w-20">{p.name}</p>
              <p className="text-[11px] font-semibold text-[#1a1a1a]">{p.price}</p>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

// ─── Orders ───────────────────────────────────────────────────────────────────

const ORDERS = [
  {
    id: "#CEF164",
    status: "Pending Approval",
    orderType: "ORDER",
    timestamp: "07/11/2026 - 1:44 PM",
    payMethod: "Pay by Patient",
    payStatus: "UNPAID",
    shipMethod: "Ship to Clinic",
    total: "$548.52",
    patientNames: ["Zeee Rabushaj", "Altin Selimi"],
    patient: { name: "Zeee Rabushaj", gender: "M", address: "95 Windermere Drive, Westchester County, NY 10710", phone: "(646)-389-7766" },
    patients: [
      { name: "Zeee Rabushaj", gender: "M", address: "95 Windermere Drive, Westchester County, NY 10710", phone: "(646)-389-7766" },
      { name: "Altin Selimi", gender: "M", address: "95 Windermere Drive, Yonkers, NY 10710", phone: "(646)-617-9881" },
    ],
    clinic: { name: "ScriptLinkRx Demo", address: "2823 Middletown Road Line 2, Bronx, NY 10461", phone: "(646)-617-9881" },
    items: [
      { name: "Tirzepatide/Pyridoxine (B6)", description: "1 (0.5mL) Vial | 20mg/25mg/mL", pharmacy: "1st Choice Compounding Pharmacy", tracking: "Tracking Not Ready", qty: 1, authRefills: 1, refillsLeft: 0, daysSupply: 1, price: "$125.43", image: imgPT141 },
      { name: "5-Amino-1mq/NMN", description: "30 Capsules | 25mg/500mg", pharmacy: "1st Choice Compounding Pharmacy", tracking: "Tracking Not Ready", qty: 30, authRefills: 1, refillsLeft: 0, daysSupply: 1, price: "$171.80", image: img431 },
      { name: "Bremelanotide (PT-141)", description: "1 (10mL) Bottle | 10mg/mL", pharmacy: "Precision Compounding Pharmacy", tracking: "Tracking Not Ready", qty: 1, authRefills: 1, refillsLeft: 0, daysSupply: 1, price: "$118.80", image: imgProduct452 },
      { name: "Aminoblend", description: "1 (30mL) Vial | 100mg/50mg/50mg/50mg/100mg/mL", pharmacy: "Thesis Pharmacy", tracking: "Tracking Not Ready", qty: 1, authRefills: 2, refillsLeft: 0, daysSupply: 1, price: "$35.99", image: img432 },
    ],
  },
  {
    id: "#BCF445",
    status: "Pending Approval",
    orderType: "ORDER",
    timestamp: "07/11/2026 - 1:21 PM",
    payMethod: "Pay by Patient",
    payStatus: "UNPAID",
    shipMethod: "Ship to Clinic",
    total: "$156.56",
    patientNames: ["Zeee Rabushaj"],
    patient: { name: "Zeee Rabushaj", gender: "M", address: "95 Windermere Drive, Westchester County, NY 10710", phone: "(646)-389-7766" },
    clinic: { name: "ScriptLinkRx Demo", address: "2823 Middletown Road Line 2, Bronx, NY 10461", phone: "(646)-617-9881" },
    items: [
      { name: "Tesamorelin/Ipamorelin", description: "1 (5mL) Vial | 2.4mg/1.2mg/mL", pharmacy: "Optimal Balance Pharmacy", tracking: "Tracking Not Ready", qty: 1, authRefills: 1, refillsLeft: 0, daysSupply: 1, price: "$135.36", image: imgPT141 },
    ],
  },
  {
    id: "#EB5790",
    status: "Processing",
    orderType: "ORDER",
    timestamp: "07/07/2026 - 09:02 AM",
    payMethod: "Pay by Clinic",
    payStatus: "PAID",
    shipMethod: "Ship to Clinic",
    total: "$180.00",
    patientNames: ["Emily Krause"],
    patient: { name: "Emily Krause", gender: "F", address: "302 Maple Ave, Brooklyn, NY 11201", phone: "(718)-555-0187" },
    clinic: { name: "ScriptLinkRx Demo", address: "2823 Middletown Road Line 2, Bronx, NY 10461", phone: "(646)-617-9881" },
    items: [
      { name: "Semaglutide", description: "2 Vials | 5mg/mL", pharmacy: "Precision Compounding", tracking: "Tracking Not Ready", qty: 2, authRefills: 5, refillsLeft: 5, daysSupply: 60, price: "$180.00", image: img434 },
    ],
  },
  {
    id: "#EB5778",
    status: "Shipped",
    orderType: "ORDER",
    timestamp: "07/07/2026 - 08:15 AM",
    payMethod: "Pay by Patient",
    payStatus: "PAID",
    shipMethod: "Ship to Patient",
    total: "$135.99",
    patientNames: ["John Reynolds"],
    patient: { name: "John Reynolds", gender: "M", address: "88 Park Blvd, Queens, NY 11375", phone: "(718)-555-0143" },
    clinic: { name: "ScriptLinkRx Demo", address: "2823 Middletown Road Line 2, Bronx, NY 10461", phone: "(646)-617-9881" },
    items: [
      { name: "Testosterone Cypionate", description: "1 Vial | 200mg/mL", pharmacy: "Rush Pharmacy FL", tracking: "TRACK-774412", qty: 1, authRefills: 11, refillsLeft: 10, daysSupply: 28, price: "$135.99", image: img452dash },
    ],
  },
];

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      className="text-[#c0c0c0] hover:text-[#183229] transition-colors flex-shrink-0"
      onClick={(e) => { e.stopPropagation(); navigator.clipboard.writeText(text).then(() => { setCopied(true); setTimeout(() => setCopied(false), 1500); }); }}
      title={copied ? "Copied!" : "Copy"}
    >
      {copied
        ? <CheckCircle2 size={11} className="text-[#183229]" />
        : <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><rect x="3" y="3" width="7" height="7" rx="1.2" stroke="currentColor" strokeWidth="1.1"/><path d="M1.5 7.5V1.5H7.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/></svg>
      }
    </button>
  );
}

function OrdersPage({ onNavigate, onOrderSelect }: { onNavigate: (p: Page) => void; onOrderSelect: (order: typeof ORDERS[number]) => void }) {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedOrderId, setSelectedOrderId] = useState(ORDERS[0]?.id ?? "");
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});
  const [quantities, setQuantities] = useState<Record<string, number>>(() => {
    const init: Record<string, number> = {};
    ORDERS.forEach((order) => order.items.forEach((item, index) => { init[`${order.id}-${index}`] = item.qty; }));
    return init;
  });
  const [shippingMethod, setShippingMethod] = useState<"standard" | "overnight">("standard");
  const [reviewOpen, setReviewOpen] = useState(false);

  const tabs = ["All", "Pending Payment", "Pending Approval", "Cancellation Requested", "Processing", "Pending eScript", "Shipped", "Delivered", "Flagged", "Cancelled"];

  const statusPillStyle: Record<string, string> = {
    "Pending Payment": "border-[#f2c56b] bg-[#fff7df] text-[#8a5b00]",
    "Pending Approval": "border-[#f2c56b] bg-[#fff7df] text-[#8a5b00]",
    "Cancellation Requested": "border-[#f2c56b] bg-[#fff7df] text-[#8a5b00]",
    Processing: "border-[#bfdbfe] bg-[#eff6ff] text-[#2563eb]",
    "Pending eScript": "border-[#e8e3df] bg-[#f6f4f5] text-[#667085]",
    Shipped: "border-[#bfdbfe] bg-[#eff6ff] text-[#2563eb]",
    Delivered: "border-[#cfe3d7] bg-[#f2f7f4] text-[#183229]",
    Flagged: "border-[#fecaca] bg-[#fff1f2] text-[#b42318]",
    Cancelled: "border-[#d8dfdc] bg-[#f6f6f7] text-[#667085]",
  };

  const filtered = ORDERS.filter((order) => {
    const matchesTab = filter === "All" || order.status === filter;
    const query = search.toLowerCase();
    const matchesSearch = !query || order.id.toLowerCase().includes(query) || order.patient.name.toLowerCase().includes(query) || order.items.some((item) => item.name.toLowerCase().includes(query));
    return matchesTab && matchesSearch;
  });

  useEffect(() => {
    if (filtered.length > 0 && !filtered.some((order) => order.id === selectedOrderId)) {
      setSelectedOrderId(filtered[0].id);
    }
  }, [filtered, selectedOrderId]);

  const selectedOrder = filtered.find((order) => order.id === selectedOrderId) ?? filtered[0] ?? ORDERS[0];
  const shipping = shippingMethod === "standard" ? 29.99 : 49.99;
  const subtotal = selectedOrder.items.reduce((sum, item, index) => {
    const key = `${selectedOrder.id}-${index}`;
    const unitPrice = Number(item.price.replace(/[$,]/g, "")) || 0;
    return sum + unitPrice * (quantities[key] ?? item.qty);
  }, 0);
  const convenienceFee = selectedOrder.payStatus === "PAID" ? 0 : Math.round(subtotal * 0.045 * 100) / 100;
  const total = subtotal + shipping + convenienceFee;

  function tabCount(tab: string) {
    return tab === "All" ? ORDERS.length : ORDERS.filter((order) => order.status === tab).length;
  }

  function updateQty(key: string, delta: number) {
    setQuantities((prev) => ({ ...prev, [key]: Math.max(1, (prev[key] ?? 1) + delta) }));
  }

  return (
    <>
      <Header title="Orders" onNavigate={onNavigate} />

      <div className="max-w-[1300px]">
      <div className="mb-5 flex flex-col gap-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#9d9d9d]">Order history</p>
            <p className="mt-1 text-[13px] text-[#6f7782]">Track payment status, shipping destination, prescriptions, and fulfillment state.</p>
          </div>
          <div className="bg-white border border-[#e4e4e4] rounded-[8px] h-9 flex items-center gap-2 px-3 w-full sm:w-72">
            <Search size={13} className="text-[#9d9d9d] flex-shrink-0" />
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              className="flex-1 text-[12px] text-[#1a1a1a] bg-transparent outline-none placeholder:text-[#b0b0b0]"
              placeholder="Search by order, patient, or item"
            />
          </div>
        </div>

        <div className="flex gap-1 rounded-[8px] bg-[#f6f4f5] p-1 overflow-x-auto">
          {tabs.map((tab) => {
            const count = tabCount(tab);
            const isActive = filter === tab;
            return (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`flex items-center gap-1.5 px-3 py-[6px] rounded-[6px] text-[12px] font-medium whitespace-nowrap transition-all ${
                  isActive ? "bg-white text-[#1a1a1a]" : "text-[#9d9d9d] hover:text-[#1a1a1a]"
                }`}
              >
                <span className={`w-4 h-4 rounded-full text-[10px] font-bold flex items-center justify-center flex-shrink-0 ${
                  isActive ? "bg-[#183229] text-white" : "bg-[#d0d0d0] text-[#6b6b6b]"
                }`}>{count}</span>
                {tab}
              </button>
            );
          })}
        </div>

      </div>

      {filtered.length === 0 ? (
        <div className="bg-white border border-[#e8e8e8] rounded-[10px] flex flex-col items-center justify-center py-16">
          <Package size={32} className="text-[#d0d0d0] mb-3" />
          <p className="text-[14px] font-semibold text-[#1a1a1a] mb-1">No orders found</p>
          <p className="text-[12px] text-[#9d9d9d]">No orders match the current filter.</p>
        </div>
      ) : (
        <div className="grid gap-4">
          {filtered.map((order) => (
            <section key={order.id} onClick={() => onOrderSelect(order)} className="cursor-pointer overflow-hidden rounded-[13px] border border-[#e5ddd5] bg-white transition-shadow hover:shadow-md">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#eee8e3] bg-[#fffcf8] px-5 py-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-[14px] font-bold text-[#1a1a1a]">{order.id}</span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-[#a7e9b8] px-2.5 py-1 text-[11px] font-bold text-[#183229]">
                    {order.payMethod}
                    <User size={12} strokeWidth={2} />
                    <span className={`rounded-full px-1.5 py-0.5 text-[9px] font-bold text-white ${
                      order.payStatus === "PAID" ? "bg-[#00b43a]" : "bg-[#ff4f8b]"
                    }`}>
                      {order.payStatus}
                    </span>
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-[#11d4d8] px-2.5 py-1 text-[11px] font-bold text-[#062b2c]">
                    {order.shipMethod}
                    <Building2 size={12} strokeWidth={2} />
                  </span>
                  <span className="inline-flex items-center rounded-full bg-[#667085] px-2.5 py-1 text-[11px] font-bold text-white">
                    {order.status.toUpperCase()}
                  </span>
                </div>
                <div className="text-right">
                  <p className="text-[15px] font-bold text-[#183229]">{order.total}</p>
                  <p className="text-[11px] text-[#8c95a1]">{order.timestamp}</p>
                </div>
              </div>

              <div className="px-7 py-3">
                  {(expandedItems[order.id] ? order.items : order.items.slice(0, 2)).map((item, index) => {
                    const orderPatients = "patients" in order ? order.patients : [order.patient];
                    const patient = orderPatients[index] ?? orderPatients[orderPatients.length - 1];
                    return (
                      <div key={`${patient.name}-${item.name}`} className={`grid min-h-[126px] grid-cols-1 py-4 lg:grid-cols-[0.78fr_1.32fr] ${index === (expandedItems[order.id] ? order.items.length : Math.min(2, order.items.length)) - 1 ? "" : "border-b border-[#e8e5e2]"}`}>
                        <div className="px-3">
                          <p className="text-[12px] font-semibold text-[#1a1a1a]">{patient.name} <span className="font-normal text-[#8c95a1]">({patient.gender})</span></p>
                          <p className="mt-1 text-[11px] text-[#6f7782]">{patient.phone}</p>
                          <p className="mt-1 text-[11px] leading-relaxed text-[#6f7782]">{patient.address}</p>
                        </div>
                        <div className="flex items-start justify-between gap-3 px-3">
                          <div className="flex min-w-0 gap-3">
                            <div className="flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-[8px] border border-[#eee8e3] bg-white">
                              <img src={item.image} alt="" className="h-12 w-12 object-contain mix-blend-multiply" />
                            </div>
                            <div className="min-w-0">
                              <p className="text-[12px] font-semibold text-[#1a1a1a]">{item.name}</p>
                              <p className="mt-0.5 text-[11px] text-[#6f7782]">{item.description}</p>
                              <p className="mt-1 text-[10px] text-[#8c95a1]">{item.pharmacy}</p>
                              <span className={`mt-1.5 inline-flex rounded-full px-2 py-0.5 text-[9px] font-semibold ${item.tracking === "Tracking Not Ready" ? "bg-[#f1f2f1] text-[#667085]" : "bg-[#e8f5ed] text-[#24613f]"}`}>{item.tracking}</span>
                              <p className="mt-1 text-[10px] text-[#8c95a1]">Qty {quantities[`${order.id}-${index}`] ?? item.qty} · Auth refills {item.authRefills} · Refills left {item.refillsLeft} · Days {item.daysSupply}</p>
                            </div>
                          </div>
                          <span className="text-[12px] font-bold text-[#1a1a1a]">{item.price}</span>
                        </div>
                      </div>
                    );
                  })}
                  {order.items.length > 2 && (
                    <button onClick={(event) => { event.stopPropagation(); setExpandedItems(prev => ({ ...prev, [order.id]: !prev[order.id] })); }} className="mx-auto mt-2 flex w-fit items-center gap-1 py-1 text-[12px] font-semibold text-[#183229]">
                      <ChevronDown size={14} strokeWidth={2} className={`transition-transform ${expandedItems[order.id] ? "rotate-180" : ""}`} />
                      {expandedItems[order.id] ? "Show less" : `Show more ${order.items.length - 2} Prescriptions`}
                    </button>
                  )}
                </div>
            </section>
          ))}
        </div>
      )}
      </div>
    </>
  );

}

function OrderDetailPage({ order, onNavigate }: { order: typeof ORDERS[number]; onNavigate: (page: Page) => void }) {
  const variant = 2;
  const [trackingLinkCopied, setTrackingLinkCopied] = useState(false);
  const [prescriberAssigned, setPrescriberAssigned] = useState(true);
  const [detailSideTab, setDetailSideTab] = useState<"status" | "receipt">("status");
  const patients = "patients" in order ? order.patients : [order.patient];
  const patientTrackingLink = `https://scriptlinkrx.com/track/${order.id.replace('#','')}`;
  const shell = variant === 1 ? "rounded-[14px] border border-[#e6e1dd] bg-white" : variant === 2 ? "rounded-[10px] border border-[#dfe5e2] bg-white shadow-sm" : variant === 3 ? "rounded-[18px] bg-[#faf7f4] shadow-[0_8px_28px_rgba(24,50,41,0.08)]" : variant === 4 ? "rounded-[12px] border-l-4 border-l-[#183229] border-y border-r border-[#e5e1dd] bg-white" : "rounded-[16px] border border-[#dce5e1] bg-[#f7faf8]";
  const section = variant === 3 ? "rounded-[14px] border border-[#ebe4df] bg-white p-5" : variant === 5 ? "rounded-[12px] border border-[#dce5e1] bg-white p-5" : "rounded-[10px] border border-[#e8e3df] bg-white p-5";
  return (
    <>
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <button onClick={() => onNavigate("orders")} className="flex items-center gap-2 text-[22px] font-semibold text-[#1a1a1a]"><ChevronLeft size={22} /> Orders</button>
        <div className="flex flex-wrap gap-2"><button className="inline-flex items-center gap-1.5 rounded-[7px] bg-[#00b43a] px-3 py-2 text-[11px] font-semibold text-white"><Download size={13} /> Download receipt</button><button onClick={() => onNavigate("support")} className="inline-flex items-center gap-1.5 rounded-[7px] bg-[#1a1a1a] px-3 py-2 text-[11px] font-semibold text-white"><Plus size={13} /> Create ticket</button><button className="inline-flex items-center gap-1.5 rounded-[7px] bg-[#df542f] px-3 py-2 text-[11px] font-semibold text-white"><XCircle size={13} /> Request cancellation</button></div>
      </div>
      <div className="grid items-start gap-5 xl:grid-cols-[minmax(0,1fr)_330px]">
        <div className="space-y-4">
          <section className={`${shell} overflow-hidden`}>
            <div className={`grid gap-4 border-b border-[#ece7e3] px-5 py-4 sm:grid-cols-3 lg:grid-cols-6 ${variant === 3 ? "bg-[#183229] text-white" : "bg-[#fffcf8]"}`}>
              {[['Order timestamp', order.timestamp], ['Order ID', order.id], ['Status', order.status], ['Ship to', order.shipMethod], ['Payment', order.payMethod], ['Final total', order.total]].map(([label,value]) => <div key={label}><p className={`text-[9px] font-semibold uppercase tracking-wider ${variant === 3 ? "text-white/60" : "text-[#8c95a1]"}`}>{label}</p>{label === 'Status' ? <span className="mt-1 inline-flex rounded-full bg-[#667085] px-2 py-1 text-[9px] font-bold text-white">{value.toUpperCase()}</span> : label === 'Ship to' ? <span className="mt-1 inline-flex items-center gap-1 rounded-full bg-[#11d4d8] px-2 py-1 text-[9px] font-bold text-[#062b2c]">{value}<Building2 size={10} /></span> : label === 'Payment' ? <span className="mt-1 inline-flex items-center gap-1 rounded-full bg-[#a7e9b8] px-2 py-1 text-[9px] font-bold text-[#183229]">{value}<User size={10} /><span className={`rounded-full px-1 py-0.5 text-[8px] text-white ${order.payStatus === 'PAID' ? 'bg-[#00b43a]' : 'bg-[#ff4f8b]'}`}>{order.payStatus}</span></span> : <p className="mt-1 text-[12px] font-semibold">{value}</p>}</div>)}
            </div>
            <div className={`grid gap-5 p-5 ${variant === 2 ? "md:grid-cols-1" : "md:grid-cols-[1.2fr_0.8fr]"}`}>
              <div><p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-[#8c95a1]">Patients</p><div className="space-y-2">{patients.map(patient => <div key={patient.name} className="rounded-[9px] bg-[#f6f8f7] p-3"><p className="text-[12px] font-semibold">{patient.name} <span className="font-normal text-[#8c95a1]">({patient.gender})</span></p><p className="mt-1 text-[11px] text-[#667085]">{patient.phone}</p><p className="mt-1 text-[11px] text-[#667085]">{patient.address}</p></div>)}</div></div>
              <div><p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-[#8c95a1]">Prescriber</p><div className="rounded-[9px] bg-[#f6f8f7] p-3">{prescriberAssigned ? <><p className="text-[12px] font-semibold">Dr. Maya Chen</p><p className="mt-1 text-[10px] leading-relaxed text-[#667085]">2823 Middletown Road<br />Bronx, NY 10461<br />(646) 617-9881<br />NPI: 1234523452</p><span className="mt-2 inline-flex items-center gap-1 rounded-full bg-[#e7f5ec] px-2 py-1 text-[9px] font-bold text-[#2f704c]"><CheckCircle2 size={10} /> Assigned</span></> : <><p className="text-[11px] text-[#667085]">No prescriber has approved this order yet.</p><button onClick={() => setPrescriberAssigned(true)} className="mt-2 inline-flex items-center gap-1 rounded-[6px] border border-[#b9c7c0] bg-white px-2 py-1.5 text-[10px] font-semibold text-[#183229]"><User size={11} /> Assign prescriber</button></>}</div></div>
            </div>
          </section>
          <section className={shell}>
            <div className="flex items-center justify-between border-b border-[#ece7e3] px-5 py-4"><div><p className="text-[14px] font-semibold">{order.items[0].pharmacy}</p><p className="mt-1 text-[11px] text-[#8c95a1]">Licensed compounding pharmacy</p></div><p className="text-[17px] font-bold text-[#183229]">{order.total}</p></div>
            <div className="grid gap-3 border-b border-[#ece7e3] bg-[#fbfcfb] px-5 py-3 sm:grid-cols-3"><div><p className="text-[9px] font-semibold uppercase text-[#8c95a1]">Shipping method</p><p className="mt-1 text-[11px] font-semibold">FedEx Overnight Refrigerated</p></div><div><p className="text-[9px] font-semibold uppercase text-[#8c95a1]">Est. delivery</p><p className="mt-1 text-[11px] font-semibold">Pending</p></div><div><p className="text-[9px] font-semibold uppercase text-[#8c95a1]">Tracking</p><p className="mt-1 text-[11px] text-[#8c95a1]">Tracking Not Ready</p></div></div>
            <div className="divide-y divide-[#ece7e3]">{order.items.map((item,index) => <div key={item.name}><div className="flex flex-wrap items-center gap-2 bg-[#f6f8f7] px-5 py-2 text-[10px] text-[#52645c]"><User size={12} className="text-[#00a63a]" /><span className="font-semibold text-[#1a1a1a]">{patients[index]?.name ?? patients[0].name}</span><span>|</span><span>{patients[index]?.phone ?? patients[0].phone}</span><span>|</span><span>{patients[index]?.address ?? patients[0].address}</span></div><div className={`grid gap-4 px-5 py-4 ${variant === 4 ? "md:grid-cols-[160px_minmax(0,1fr)_90px]" : "md:grid-cols-[minmax(0,1fr)_90px]"}`}>{variant === 4 && <div className="text-[11px] text-[#667085]">Days {item.daysSupply}<br />Refills {item.authRefills}</div>}<div className="flex gap-3"><div className="flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-[8px] border border-[#e8e3df] bg-white"><img src={item.image} alt="" className="size-12 object-contain mix-blend-multiply" /></div><div><p className="text-[12px] font-semibold">{item.name}</p><p className="mt-1 text-[11px] text-[#667085]">{item.description}</p><span className="mt-2 inline-flex rounded-full bg-[#fff0c7] px-2 py-0.5 text-[9px] font-semibold text-[#865500]">Open Rx</span><p className="mt-2 text-[10px] text-[#1a1a1a]"><strong>Sig:</strong> Use as directed by prescriber.</p><p className="mt-1 text-[10px] text-[#1a1a1a]"><strong>Reason:</strong> Patient requires a customized compounded formulation.</p><p className="mt-2 text-[10px] text-[#8c95a1]">Qty {item.qty} · Days {item.daysSupply} · Refills {item.authRefills}</p></div></div><p className="text-right text-[12px] font-bold">{item.price}</p></div><div className="flex items-center gap-3 px-5 pb-4"><div className="flex size-10 items-center justify-center rounded-[8px] border border-[#e8e3df] bg-[#fafafa]"><Syringe size={15} className="text-[#8c95a1]" /></div><div><p className="text-[11px] font-semibold">Supplies pack — suitable needles, syringe and alcohol pads</p><p className="mt-0.5 text-[10px] text-[#8c95a1]">Suitable amount for the prescribed dosage</p></div></div></div>)}</div>
          </section>
        </div>
        <aside className="sticky top-6 space-y-4">
          <div className="grid grid-cols-2 rounded-[12px] bg-white p-1 shadow-sm"><button onClick={() => setDetailSideTab("status")} className={`h-9 rounded-[9px] text-[11px] font-semibold ${detailSideTab === "status" ? "bg-[#183229] text-white" : "text-[#667085]"}`}>Order status</button><button onClick={() => setDetailSideTab("receipt")} className={`h-9 rounded-[9px] text-[11px] font-semibold ${detailSideTab === "receipt" ? "bg-[#183229] text-white" : "text-[#667085]"}`}>Receipt</button></div>
          {detailSideTab === "status" ? <>
          <section className={section}><h2 className="text-[18px] font-semibold">Order status</h2><div className="mt-5 space-y-0">{['Order created','In progress','Shipped','Delivered'].map((step,index) => <div key={step} className="flex gap-3"><div className="flex flex-col items-center"><span className={`flex size-8 items-center justify-center rounded-full ${index === 0 ? 'bg-[#183229] text-white' : 'bg-[#edf0ee] text-[#8c95a1]'}`}>{index === 0 ? <Package size={14}/> : <CheckCircle2 size={14}/>}</span>{index < 3 && <span className="h-9 w-px bg-[#dfe5e2]" />}</div><div className="pt-1"><p className="text-[12px] font-semibold">{step}</p>{index === 0 && <p className="mt-1 text-[10px] text-[#b42318]">Payment {order.payStatus.toLowerCase()}</p>}</div></div>)}</div><div className="mt-5 flex items-center gap-3 rounded-[10px] bg-[#f1f3f2] px-3.5 py-3"><span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white text-[#183229]"><Bell size={14} /></span><div><p className="text-[12px] font-semibold text-[#1a1a1a]">Live updates</p><p className="mt-0.5 text-[10px] text-[#667085]">We’ll keep you informed as this order progresses.</p></div></div></section>
          <section className={section}><h3 className="text-[14px] font-semibold">Share with patient</h3><p className="mt-1 text-[11px] text-[#667085]">Send this link so the patient can track the order.</p><div className="mt-3 flex items-center gap-2 rounded-[8px] border border-[#dfe5e2] bg-[#f8faf9] px-3 py-2"><span className="min-w-0 flex-1 truncate text-[10px] text-[#52645c]">{patientTrackingLink}</span><button onClick={() => navigator.clipboard.writeText(patientTrackingLink).then(() => { setTrackingLinkCopied(true); window.setTimeout(() => setTrackingLinkCopied(false), 1600); })} className="flex shrink-0 items-center gap-1 rounded-[6px] bg-white px-2 py-1 text-[10px] font-semibold text-[#183229] shadow-sm">{trackingLinkCopied ? <CheckCircle2 size={12} /> : <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><rect x="3.5" y="3.5" width="7" height="7" rx="1.2" stroke="currentColor"/><path d="M1.5 8V1.5H8" stroke="currentColor" strokeLinecap="round"/></svg>}{trackingLinkCopied ? 'Copied' : 'Copy'}</button></div></section>
          </> : <section className={section}><h2 className="text-[18px] font-semibold">Receipt</h2><p className="mt-1 text-[11px] text-[#667085]">Order {order.id}</p><div className="mt-5 space-y-3">{order.items.map(item => <div key={item.name} className="flex justify-between gap-3 text-[11px]"><span className="text-[#667085]">{item.name}</span><span className="font-semibold">{item.price}</span></div>)}</div><div className="mt-5 border-t border-[#e8e3df] pt-4"><div className="flex justify-between text-[12px]"><span>Shipping</span><span className="font-semibold">Included</span></div><div className="mt-3 flex justify-between text-[15px] font-bold"><span>Total</span><span className="text-[#183229]">{order.total}</span></div></div><button className="mt-5 flex h-10 w-full items-center justify-center gap-2 rounded-[8px] bg-[#183229] text-[11px] font-semibold text-white"><Download size={13} /> Download receipt</button></section>}
        </aside>
      </div>
    </>
  );
}

// ─── Pharmacies ───────────────────────────────────────────────────────────────

const PHARMACIES = [
  { name: "Optimal Balance Pharmacy", location: "Miami, FL", turnaround: "1-2 Days", products: 42, rating: 4.9, status: "Active", phone: "+1 (305) 555-0192" },
  { name: "Rush Pharmacy FL", location: "Orlando, FL", turnaround: "Same Day", products: 38, rating: 4.7, status: "Active", phone: "+1 (407) 555-0143" },
  { name: "Precision Compounding", location: "Houston, TX", turnaround: "2-3 Days", products: 65, rating: 4.8, status: "Active", phone: "+1 (713) 555-0187" },
  { name: "Westside Pharmacy", location: "Los Angeles, CA", turnaround: "1-2 Days", products: 30, rating: 4.5, status: "Active", phone: "+1 (310) 555-0121" },
  { name: "Northeast Compounding", location: "Boston, MA", turnaround: "2-4 Days", products: 22, rating: 4.3, status: "Inactive", phone: "+1 (617) 555-0167" },
];

function PharmaciesPage({ onNavigate }: { onNavigate: (p: Page) => void }) {
  return (
    <>
      <Header title="Pharmacies" onNavigate={onNavigate} />

      <div className="flex items-center gap-3 mb-6">
        <div className="bg-white border border-[#efefef] rounded-[9px] h-9 flex items-center gap-2 px-3 w-64">
          <Search size={14} className="text-[#9d9d9d]" />
          <input
            className="flex-1 text-[12px] font-medium text-[#1a1a1a] bg-transparent outline-none placeholder:text-[#9d9d9d]"
            placeholder="Search pharmacies..."
          />
        </div>
        <div className="ml-auto flex gap-2">
          <button className="flex items-center gap-1.5 border border-[#eaeaea] bg-card rounded-[8px] px-3 py-2 text-[12px] font-medium text-[#1a1a1a] hover:bg-[#f7efe9]/60 transition-colors">
            <Filter size={13} /> Filter
          </button>
          <button className="flex items-center gap-1.5 bg-black text-white rounded-[8px] px-3 py-2 text-[12px] font-medium hover:bg-[#1a1a1a]/90 transition-colors">
            <Plus size={13} /> Add Pharmacy
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {PHARMACIES.map((ph) => (
          <div key={ph.name} className="bg-card border border-[#eaeaea] rounded-xl p-5 hover:shadow-sm transition-all">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-[14px] font-semibold text-[#1a1a1a]">{ph.name}</h3>
                <div className="flex items-center gap-1.5 mt-1">
                  <MapPin size={11} className="text-[#9d9d9d]" />
                  <span className="text-[11px] text-[#9d9d9d]">{ph.location}</span>
                </div>
              </div>
              <Badge variant={ph.status === "Active" ? "success" : "neutral"}>
                <StatusDot status={ph.status} />
                {ph.status}
              </Badge>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-4">
              {[
                { label: "Turnaround", value: ph.turnaround },
                { label: "Products", value: ph.products },
                { label: "Rating", value: `★ ${ph.rating}` },
              ].map(({ label, value }) => (
                <div key={label} className="bg-[#f9f0ea]/50 rounded-[8px] px-3 py-2">
                  <p className="text-[10px] text-[#9d9d9d] mb-0.5">{label}</p>
                  <p className="text-[13px] font-semibold text-[#1a1a1a]">{value}</p>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <Phone size={11} className="text-[#9d9d9d]" />
                <span className="text-[11px] text-[#9d9d9d]">{ph.phone}</span>
              </div>
              <div className="flex gap-2">
                <button className="p-1.5 rounded-[6px] border border-[#eaeaea] hover:bg-[#f7efe9] transition-colors">
                  <Edit3 size={12} className="text-[#9d9d9d]" />
                </button>
                <button className="p-1.5 rounded-[6px] border border-[#eaeaea] hover:bg-[#fee2e2] transition-colors">
                  <Trash2 size={12} className="text-[#9d9d9d]" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

// ─── Support ──────────────────────────────────────────────────────────────────

const TICKETS = [
  { id: "#089", subject: "Order not received after 5 days", patient: "Sarah Mitchell", status: "Open", priority: "Urgent", created: "Jul 8", assigned: "Dr. Chen" },
  { id: "#088", subject: "Wrong product shipped - need replacement", patient: "John Reynolds", status: "Open", priority: "Urgent", created: "Jul 7", assigned: "Unassigned" },
  { id: "#087", subject: "Question about dosage instructions", patient: "Emily Krause", status: "Resolved", priority: "Normal", created: "Jul 6", assigned: "Nurse Kim" },
  { id: "#086", subject: "Billing discrepancy on last invoice", patient: "David Lim", status: "Open", priority: "Normal", created: "Jul 5", assigned: "Admin Team" },
  { id: "#085", subject: "Side effects consultation request", patient: "Maria Santos", status: "Resolved", priority: "Normal", created: "Jul 4", assigned: "Dr. Chen" },
  { id: "#084", subject: "Insurance coverage question", patient: "Chris Baker", status: "Resolved", priority: "Normal", created: "Jul 3", assigned: "Admin Team" },
];

function SupportPage({ onNavigate }: { onNavigate: (p: Page) => void }) {
  const [tab, setTab] = useState("All");
  const tabs = ["All", "Open", "Resolved", "Urgent"];

  const filtered = TICKETS.filter((t) => {
    if (tab === "All") return true;
    if (tab === "Urgent") return t.priority === "Urgent";
    return t.status === tab;
  });

  return (
    <>
      <Header title="Support" onNavigate={onNavigate} />

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        {[
          { label: "Open Tickets", value: "17", icon: MessageSquare, color: "bg-blue-500" },
          { label: "Urgent", value: "3", icon: AlertCircle, color: "bg-red-500" },
          { label: "Avg Response", value: "4.2h", icon: Clock, color: "bg-amber-500" },
          { label: "Resolved Today", value: "8", icon: CheckCircle2, color: "bg-emerald-500" },
        ].map(({ label, value, icon: Icon, color }) => (
          <div key={label} className="bg-card border border-[#eaeaea] rounded-xl p-4 flex items-center gap-3">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${color}`}>
              <Icon size={14} className="text-white" />
            </div>
            <div>
              <p className="text-[11px] text-[#9d9d9d]">{label}</p>
              <p className="text-[20px] font-semibold text-[#1a1a1a]">{value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Tabs + New */}
      <div className="flex items-center gap-2 mb-4">
        <div className="flex gap-1 bg-[#f6f4f5] p-1 rounded-[8px]">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-3 py-1 rounded-[6px] text-[12px] font-medium transition-all ${
                tab === t ? "bg-white shadow-sm text-[#1a1a1a]" : "text-[#9d9d9d]"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
        <div className="ml-auto">
          <button className="flex items-center gap-1.5 bg-black text-white rounded-[8px] px-3 py-2 text-[12px] font-medium hover:bg-[#1a1a1a]/90 transition-colors">
            <Plus size={13} /> New Ticket
          </button>
        </div>
      </div>

      <div className="bg-card border border-[#eaeaea] rounded-xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#f0f0f0]">
              {["Ticket", "Subject", "Patient", "Priority", "Status", "Created", "Assigned", ""].map((h) => (
                <th key={h} className="text-left text-[11px] text-[#9d9d9d] font-medium px-4 py-3">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((t) => (
              <tr key={t.id} className="border-b border-[#f5f5f5] hover:bg-[#fafafa] transition-colors">
                <td className="px-4 py-3 text-[12px] font-medium text-[#1a1a1a]">{t.id}</td>
                <td className="px-4 py-3 text-[12px] text-[#1a1a1a] max-w-[200px] truncate">{t.subject}</td>
                <td className="px-4 py-3 text-[12px] text-[#9d9d9d]">{t.patient}</td>
                <td className="px-4 py-3">
                  <Badge variant={t.priority === "Urgent" ? "error" : "neutral"}>{t.priority}</Badge>
                </td>
                <td className="px-4 py-3">
                  <Badge variant={t.status === "Open" ? "info" : "success"}>
                    <StatusDot status={t.status} />
                    {t.status}
                  </Badge>
                </td>
                <td className="px-4 py-3 text-[12px] text-[#9d9d9d]">{t.created}</td>
                <td className="px-4 py-3 text-[12px] text-[#9d9d9d]">{t.assigned}</td>
                <td className="px-4 py-3">
                  <button className="text-[#9d9d9d] hover:text-[#1a1a1a]">
                    <Eye size={14} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

// ─── Users/Patients ───────────────────────────────────────────────────────────

const PATIENTS = [
  { firstName: "Dan", lastName: "Rahming", birthDate: "04/14/1991", gender: "M", primaryPhone: "(646) 617-1880", address1: "95 Meadowbrook Drive", address2: "", city: "Westchester County", state: "NY", zip: "10705" },
  { firstName: "Chad", lastName: "Rahming", birthDate: "04/14/1991", gender: "M", primaryPhone: "(646) 617-1880", address1: "95 Meadowbrook Drive", address2: "", city: "Westchester County", state: "NY", zip: "10705" },
  { firstName: "Alex", lastName: "Rahming", birthDate: "08/14/1991", gender: "F", primaryPhone: "(646) 617-1880", address1: "95 Meadowbrook Drive", address2: "", city: "Tuckahoe", state: "NY", zip: "10707" },
  { firstName: "Sam", lastName: "B.", birthDate: "05/31/1995", gender: "F", primaryPhone: "(646) 617-1880", address1: "95 Meadowbrook Drive", address2: "", city: "Westchester County", state: "NY", zip: "10705" },
  { firstName: "Eve", lastName: "K.", birthDate: "02/14/1991", gender: "F", primaryPhone: "(646) 617-1880", address1: "95 Meadowbrook Drive", address2: "", city: "Westchester County", state: "NY", zip: "10705" },
  { firstName: "John", lastName: "Scott", birthDate: "01/17/1993", gender: "M", primaryPhone: "(646) 617-1880", address1: "395 Oak St", address2: "Suite 500", city: "Los Angeles", state: "CA", zip: "90001" },
  { firstName: "John", lastName: "Scott", birthDate: "01/17/1993", gender: "M", primaryPhone: "(646) 617-1880", address1: "962 NEC Blvd", address2: "Floor 5", city: "Denver", state: "CO", zip: "k" },
  { firstName: "Taylor", lastName: "Mitchell", birthDate: "01/17/1993", gender: "M", primaryPhone: "(646) 617-1880", address1: "965 Dan St", address2: "Apr NJ", city: "New York", state: "NY", zip: "50001" },
  { firstName: "Mark", lastName: "Wood", birthDate: "01/17/1993", gender: "M", primaryPhone: "(646) 617-1880", address1: "965 Dan St", address2: "Floor A", city: "New York", state: "NY", zip: "50001" },
  { firstName: "John", lastName: "Scott", birthDate: "01/17/1993", gender: "M", primaryPhone: "(646) 617-1880", address1: "962 NEC Blvd", address2: "Floor 5", city: "Denver", state: "CO", zip: "k" },
  { firstName: "John", lastName: "Smith", birthDate: "01/17/1993", gender: "M", primaryPhone: "(646)617-1880", address1: "965 Dan St", address2: "Apr NJ", city: "New York", state: "NY", zip: "50001" },
  { firstName: "John", lastName: "Scott", birthDate: "01/17/1993", gender: "M", primaryPhone: "(646) 617-1880", address1: "962 NEC Blvd", address2: "Floor 5", city: "Denver", state: "CO", zip: "k" },
  { firstName: "Robert", lastName: "Wilson", birthDate: "08/03/1975", gender: "M", primaryPhone: "(646) 617-1880", address1: "395 Oak St", address2: "Suite 500", city: "Los Angeles", state: "CA", zip: "90001" },
  { firstName: "Jane", lastName: "Doe", birthDate: "03/22/1988", gender: "F", primaryPhone: "(646) 617-1880", address1: "88 Elm Ave", address2: "", city: "English", state: "WA", zip: "98001" },
  { firstName: "John", lastName: "Scott", birthDate: "01/17/1993", gender: "M", primaryPhone: "(646) 617-1880", address1: "962 NEC Blvd", address2: "Floor 5", city: "Denver", state: "CO", zip: "k" },
  { firstName: "Allison", lastName: "Johnson", birthDate: "11/25/1985", gender: "F", primaryPhone: "(646) 617-1880", address1: "902 Cedar Ln", address2: "", city: "English", state: "WA", zip: "98003" },
  { firstName: "Emily", lastName: "Davis", birthDate: "07/19/1990", gender: "F", primaryPhone: "(646) 617-1880", address1: "902 Cedar Ln", address2: "", city: "English", state: "WA", zip: "98003" },
  { firstName: "Tom", lastName: "Taylor", birthDate: "09/05/1982", gender: "M", primaryPhone: "(646) 617-1880", address1: "902 Cedar Ln", address2: "", city: "Houston", state: "TX", zip: "77001" },
  { firstName: "Sara", lastName: "Brown", birthDate: "04/11/1994", gender: "F", primaryPhone: "(646) 617-1880", address1: "962 NEC Blvd", address2: "Apr NJ", city: "Atlanta", state: "GA", zip: "30301" },
  { firstName: "Tom", lastName: "Taylor", birthDate: "09/05/1982", gender: "M", primaryPhone: "(646) 617-1880", address1: "902 Canal Dr", address2: "", city: "Houston", state: "TX", zip: "77001" },
  { firstName: "Jane", lastName: "Doe", birthDate: "03/22/1988", gender: "F", primaryPhone: "(646) 617-1880", address1: "88 Elm Ave", address2: "Suite 2001", city: "Los Angeles", state: "CA", zip: "90003" },
  { firstName: "Michael", lastName: "Chu", birthDate: "06/30/1979", gender: "M", primaryPhone: "(646) 617-1880", address1: "396 May Dr", address2: "", city: "New York", state: "NY", zip: "10001" },
];

function UsersPage({ onNavigate }: { onNavigate: (p: Page) => void }) {
  const [search, setSearch] = useState("");
  const filtered = PATIENTS.filter(
    (p) =>
      `${p.firstName} ${p.lastName}`.toLowerCase().includes(search.toLowerCase()) ||
      p.city.toLowerCase().includes(search.toLowerCase()) ||
      p.primaryPhone.includes(search)
  );

  const COLS = [
    "First Name", "Last Name", "Birth Date", "Gender",
    "Primary Phone", "Address Line 1", "Address Line 2", "City", "State", "Zip",
  ];

  return (
    <>
      {/* Page header row */}
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-[22px] font-semibold text-[#1a1a1a] leading-tight">
          Patients{" "}
          <span className="text-[16px] font-normal text-[#9d9d9d]">({PATIENTS.length})</span>
        </h1>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1.5 border border-[#d0d0d0] bg-white rounded-[8px] px-4 py-2 text-[12px] font-medium text-[#1a1a1a] hover:bg-[#f7efe9]/60 transition-colors">
            <Upload size={12} />
            Upload Patients
          </button>
          <button className="flex items-center gap-1.5 bg-[#183229] text-white rounded-[8px] px-4 py-2 text-[12px] font-medium hover:bg-[#183229]/90 transition-colors">
            <Plus size={12} />
            Create Patient
          </button>
        </div>
      </div>

      {/* Search bar */}
      <div className="mb-4">
        <div className="bg-white border border-[#e4e4e4] rounded-[8px] h-9 flex items-center gap-2 px-3 w-56">
          <Search size={13} className="text-[#9d9d9d] flex-shrink-0" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 text-[12px] text-[#1a1a1a] bg-transparent outline-none placeholder:text-[#b0b0b0]"
            placeholder="Search"
          />
        </div>
      </div>

      {/* Table */}
      <div className="bg-white border border-[#e8e8e8] rounded-[10px] overflow-x-auto">
        <table className="w-full min-w-[900px]">
          <thead>
            <tr className="border-b border-[#efefef] bg-[#fafafa]">
              {COLS.map((h) => (
                <th
                  key={h}
                  className="text-left text-[11px] font-semibold text-[#6b6b6b] px-3 py-2.5 whitespace-nowrap"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((p, i) => (
              <tr
                key={i}
                className="border-b border-[#f3f3f3] hover:bg-[#fffbf8] transition-colors cursor-pointer"
              >
                <td className="px-3 py-2.5 text-[12px] text-[#1a1a1a] whitespace-nowrap">{p.firstName}</td>
                <td className="px-3 py-2.5 text-[12px] text-[#1a1a1a] whitespace-nowrap">{p.lastName}</td>
                <td className="px-3 py-2.5 text-[12px] text-[#4b4b4b] whitespace-nowrap">{p.birthDate}</td>
                <td className="px-3 py-2.5 text-[12px] text-[#4b4b4b] whitespace-nowrap">{p.gender}</td>
                <td className="px-3 py-2.5 text-[12px] text-[#4b4b4b] whitespace-nowrap">{p.primaryPhone}</td>
                <td className="px-3 py-2.5 text-[12px] text-[#4b4b4b]">{p.address1}</td>
                <td className="px-3 py-2.5 text-[12px] text-[#4b4b4b]">{p.address2}</td>
                <td className="px-3 py-2.5 text-[12px] text-[#4b4b4b] whitespace-nowrap">{p.city}</td>
                <td className="px-3 py-2.5 text-[12px] text-[#4b4b4b] whitespace-nowrap">{p.state}</td>
                <td className="px-3 py-2.5 text-[12px] text-[#4b4b4b] whitespace-nowrap">{p.zip}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

// ─── Settings ─────────────────────────────────────────────────────────────────

function SettingsPage({ onNavigate }: { onNavigate: (p: Page) => void }) {
  const [activeTab, setActiveTab] = useState("Business Account");
  const [payByClinicTab, setPayByClinicTab] = useState<"cards" | "ach">("cards");

  const tabs = ["Business Account", "Users", "Prescribers", "Pay by Clinic", "Agreements"];
  const users = [
    ["1", "Adnan Godanci", "(646)-617-9881", "adnan@batchrx.com", "Manager"],
    ["2", "Anna Robinson", "(646)-690-9596", "anna@scriptlinkrx.com", "Prescriber"],
    ["3", "Rudi .", "(917)-719-4314", "rudi@scriptlinkrx.com", "Prescriber"],
    ["4", "Sam .", "(917)-267-8116", "sam@scriptlinkrx.com", "Prescriber"],
    ["5", "Test User xsOvim", "(555)-555-5555", "test+xsOvim@scriptlinkrx.com", "Manager"],
    ["6", "Test User d8nos3", "(555)-555-5555", "test+d8nos3@scriptlinkrx.com", "Manager"],
    ["7", "Mariam Makawy", "(646)-389-2493", "mariam@scriptlinkrx.com", "Prescriber"],
    ["8", "shpend support", "(646)-617-9881", "shpend-support@gmail.com", "Manager"],
    ["9", "Shpend Beqiraj", "(646)-617-9881", "shpend@scriptlinkrx.com", "Prescriber"],
  ];
  const prescribers = [
    ["1", "Chirag Support", "(646)-617-9881", "chirag_support@scriptlinkrx.com", "1234566982"],
    ["2", "Altin Selimi", "(646)-617-9881", "altin@batchrx.com", "1804612084"],
    ["3", "Altin Selimi", "(646)-617-9881", "altiin-a@scriptlinkrx.com", "-"],
    ["4", "Alex Revira", "(100)-147-1633", "alex@scriptlinkrx.com", "1121311614"],
    ["5", "Eric Garcia", "(646)-389-9683", "eric@scriptlinkrx.com", "1234232323"],
    ["6", "Zee Rabushaj", "(646)-617-9881", "demo2@scriptlinkrx.com", "1234523452"],
  ];

  function SettingsField({ label, value, required, wide }: { label: string; value: string; required?: boolean; wide?: boolean }) {
    return (
      <label className={wide ? "col-span-2 max-md:col-span-1" : ""}>
        <span className="mb-1.5 block text-[11px] text-[#9d9d9d]">
          {label}{required && <span className="text-[#d92d20]">*</span>}
        </span>
        <input
          readOnly
          value={value}
          className="w-full rounded-[8px] border border-[#eaeaea] bg-card px-3 py-2.5 text-[13px] text-[#1a1a1a] outline-none transition-colors focus:border-[#183229]"
        />
      </label>
    );
  }

  function DataTable({ type }: { type: "users" | "prescribers" }) {
    const rows = type === "users" ? users : prescribers;
    const headers = type === "users"
      ? ["#", "Full Name", "User Phone", "User Email", "User Title", "Status", ""]
      : ["#", "Full Name", "Prescriber Phone", "Prescriber Email", "NPI Number", "Status", ""];
    return (
      <div className="overflow-hidden rounded-[10px] border border-[#e8e3df] bg-white">
        <div className="grid grid-cols-[40px_1.1fr_1fr_1.55fr_1fr_92px_38px] border-b border-[#eee8e3] bg-[#fbfaf8] px-4 py-3">
          {headers.map(h => (
            <span key={h} className="text-[10px] font-semibold uppercase tracking-[0.08em] text-[#8c8c8c]">{h}</span>
          ))}
        </div>
        {rows.map(row => (
          <div key={`${type}-${row[0]}`} className="grid grid-cols-[40px_1.1fr_1fr_1.55fr_1fr_92px_38px] items-center px-4 py-3 text-[12px] text-[#1a1a1a] odd:bg-white even:bg-[#fbfaf8]">
            {row.map(cell => <span key={cell} className="min-w-0 truncate">{cell}</span>)}
            <Badge variant="success">Active</Badge>
            <button className="flex size-7 items-center justify-center rounded-[7px] text-[#8c95a1] transition-colors hover:bg-[#f2f7f4] hover:text-[#183229]" aria-label="More actions">
              <MoreHorizontal size={15} />
            </button>
          </div>
        ))}
      </div>
    );
  }

  return (
    <>
      <Header title="Settings" onNavigate={onNavigate} />

      <div className="grid grid-cols-[220px_1fr] gap-6">
        <nav className="flex flex-col gap-1">
          {[
            { icon: Building2, label: "Business Account" },
            { icon: Users, label: "Users" },
            { icon: User, label: "Prescribers" },
            { icon: CreditCard, label: "Pay by Clinic" },
            { icon: ClipboardList, label: "Agreements" },
          ].map(({ icon: Icon, label }) => (
            <button
              key={label}
              onClick={() => setActiveTab(label)}
              className={`flex items-center gap-2.5 rounded-[8px] px-3 py-2.5 text-left text-[13px] font-medium transition-colors ${
                activeTab === label ? "bg-[#f7efe9] text-[#1a1a1a]" : "text-[#9d9d9d] hover:bg-[#f7efe9]/60 hover:text-[#1a1a1a]"
              }`}
            >
              <Icon size={15} strokeWidth={1.5} />
              {label}
            </button>
          ))}
        </nav>

        <div className="space-y-5">
          {activeTab === "Business Account" && (
            <div className="bg-card rounded-xl border border-[#eaeaea] p-6">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-[14px] font-semibold text-[#1a1a1a]">Business Account</h3>
                <button className="rounded-[8px] bg-black px-4 py-2 text-[12px] font-medium text-white transition-colors hover:bg-[#1a1a1a]/90">
                  Edit Profile
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
                <SettingsField label="Business Name" value="ScriptLinkRx Demo" required wide />
                <SettingsField label="Business NPI" value="2222222111" wide />
                <SettingsField label="Address Line 1" value="2823 Middletown Road" wide />
                <SettingsField label="Address Line 2" value="Line 2" wide />
                <SettingsField label="City" value="Bronx" />
                <SettingsField label="State" value="New York" />
                <SettingsField label="Zip Code" value="10461" />
                <SettingsField label="Phone" value="(646)-617-9881" />
                <SettingsField label="Fax" value="(646)-617-9881" />
                <SettingsField label="Pay By Preferred" value="Clinic" />
                <SettingsField label="Ship To Preferred" value="Clinic" />
              </div>
            </div>
          )}

          {activeTab === "Users" && (
            <div className="bg-card rounded-xl border border-[#eaeaea] p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-[14px] font-semibold text-[#1a1a1a]">Users</h3>
              <div className="flex gap-2">
                <button className="rounded-[8px] border border-[#eaeaea] px-3 py-2 text-[12px] font-medium text-[#1a1a1a] transition-colors hover:bg-[#f7efe9]/60">Invite</button>
                <button className="flex items-center gap-1.5 rounded-[8px] bg-black px-3 py-2 text-[12px] font-medium text-white transition-colors hover:bg-[#1a1a1a]/90">
                  <Plus size={15} /> Add User
                </button>
              </div>
            </div>
            <DataTable type="users" />
          </div>
          )}

          {activeTab === "Prescribers" && (
            <div className="bg-card rounded-xl border border-[#eaeaea] p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-[14px] font-semibold text-[#1a1a1a]">Prescribers</h3>
              <div className="flex gap-2">
                <button className="rounded-[8px] border border-[#eaeaea] px-3 py-2 text-[12px] font-medium text-[#1a1a1a] transition-colors hover:bg-[#f7efe9]/60">Invite</button>
                <button className="flex items-center gap-1.5 rounded-[8px] bg-black px-3 py-2 text-[12px] font-medium text-white transition-colors hover:bg-[#1a1a1a]/90">
                  <Plus size={15} /> Add Prescriber
                </button>
              </div>
            </div>
            <DataTable type="prescribers" />
          </div>
          )}

          {activeTab === "Pay by Clinic" && (
            <div className="bg-card rounded-xl border border-[#eaeaea] p-6">
            <div className="mb-5 flex items-center border-b border-[#f5f5f5] pb-4">
              <button
                onClick={() => setPayByClinicTab("cards")}
                className={`rounded-[8px] px-3 py-2 text-[12px] font-medium transition-colors ${
                  payByClinicTab === "cards" ? "bg-[#f7efe9] text-[#1a1a1a]" : "text-[#9d9d9d] hover:bg-[#f7efe9]/60 hover:text-[#1a1a1a]"
                }`}
              >
                Credit Cards
                <span className="ml-2 rounded-[6px] border border-[#cfe3d7] bg-[#f2f7f4] px-2 py-0.5 text-[10px] font-semibold text-[#183229]">
                  Primary
                </span>
              </button>
              <button
                onClick={() => setPayByClinicTab("ach")}
                className={`rounded-[8px] px-3 py-2 text-[12px] font-medium transition-colors ${
                  payByClinicTab === "ach" ? "bg-[#f7efe9] text-[#1a1a1a]" : "text-[#9d9d9d] hover:bg-[#f7efe9]/60 hover:text-[#1a1a1a]"
                }`}
              >
                ACH Payout Account
              </button>
              <button className="ml-auto flex items-center gap-1.5 rounded-[8px] bg-black px-3 py-2 text-[12px] font-medium text-white transition-colors hover:bg-[#1a1a1a]/90">
                <Plus size={15} /> {payByClinicTab === "cards" ? "Add Credit Card" : "Add Bank Account"}
              </button>
            </div>
            {payByClinicTab === "cards" ? (
              <div className="grid grid-cols-2 gap-5 max-lg:grid-cols-1">
                <div className="flex min-h-[220px] flex-col items-center justify-center rounded-[10px] border border-[#eaeaea] bg-white p-6 text-center">
                  <Package size={32} strokeWidth={1.5} className="mb-3 text-[#9d9d9d]" />
                  <p className="text-[14px] font-semibold text-[#1a1a1a]">No credit card found</p>
                  <p className="mt-2 text-[12px] text-[#8c8c8c]">No credit card yet. Add a credit card to enable Pay by Clinic feature.</p>
                  <button className="mt-5 flex items-center gap-1.5 rounded-[8px] bg-black px-3 py-2 text-[12px] font-medium text-white transition-colors hover:bg-[#1a1a1a]/90">
                    <Plus size={15} /> Add Credit Card
                  </button>
                </div>
                <div className="rounded-[10px] border border-[#eaeaea] bg-[#f7efe9]/40 p-6">
                  <AlertCircle size={17} className="mb-4 text-[#667085]" />
                  <p className="max-w-[420px] text-[13px] leading-relaxed text-[#667085]">
                    To have the Pay by Clinic feature enabled, you must have a valid credit card on file. The credit card will be charged upon submitting a new prescription.
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <button className="rounded-[8px] bg-black px-3 py-2 text-[12px] font-medium text-white transition-colors hover:bg-[#1a1a1a]/90">
                  Set as Primary
                </button>
                <div className="grid grid-cols-2 gap-5 max-lg:grid-cols-1">
                  <div className="overflow-hidden rounded-[10px] border border-[#eaeaea] bg-white">
                    <div className="grid grid-cols-[40px_minmax(0,1fr)_120px_92px] border-b border-[#eee8e3] bg-[#fbfaf8] px-4 py-3">
                      {["#", "Bank Accounts", "Status", ""].map(h => (
                        <span key={h} className="text-[10px] font-semibold uppercase tracking-[0.08em] text-[#8c8c8c]">{h}</span>
                      ))}
                    </div>
                    <div className="grid grid-cols-[40px_minmax(0,1fr)_120px_92px] items-center px-4 py-4 text-[12px] text-[#1a1a1a]">
                      <span>1</span>
                      <div className="min-w-0">
                        <p className="truncate text-[13px] font-semibold text-[#1a1a1a]">Chase Bank</p>
                        <p className="mt-1 text-[11px] text-[#8c8c8c]">**** **** **** 2826</p>
                        <p className="mt-2 text-[11px] text-[#667085]">Checking</p>
                      </div>
                      <span className="w-fit rounded-[6px] border border-[#cfe3d7] bg-[#f2f7f4] px-2 py-1 text-[10px] font-semibold text-[#183229]">
                        Primary
                      </span>
                      <button className="rounded-[8px] border border-[#00b43a] px-3 py-2 text-[12px] font-semibold text-[#00b43a] transition-colors hover:bg-[#ecfff2]">
                        Update
                      </button>
                    </div>
                  </div>
                  <div className="rounded-[10px] border border-[#eaeaea] bg-[#f7efe9]/40 p-6">
                    <AlertCircle size={17} className="mb-4 text-[#667085]" />
                    <p className="max-w-[420px] text-[13px] leading-relaxed text-[#667085]">
                      Add a bank account to receive payouts for patient transactions. We securely store your banking information and process payouts on a weekly basis.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
          )}

          {activeTab === "Agreements" && (
            <div className="bg-card rounded-xl border border-[#eaeaea] p-6">
            <h3 className="mb-4 text-[14px] font-semibold text-[#1a1a1a]">Agreements</h3>
            <div className="grid grid-cols-2 gap-5 max-lg:grid-cols-1">
              <div className="rounded-[10px] border border-[#eaeaea] bg-white p-6">
                <div className="mb-5 flex items-center gap-4">
                  <div className="flex size-12 items-center justify-center rounded-[10px] bg-[#d4f4e3] text-[#00b43a]">
                    <ClipboardList size={24} />
                  </div>
                  <div>
                    <p className="text-[16px] font-semibold text-[#1a1a1a]">ACH Debit Authorization Agreement</p>
                    <p className="mt-1 text-[12px] text-[#667085]">Signed on: December 13, 2025</p>
                  </div>
                </div>
                <button className="rounded-[8px] bg-black px-3 py-2 text-[12px] font-medium text-white transition-colors hover:bg-[#1a1a1a]/90">
                  View Agreement
                </button>
              </div>
              <div className="rounded-[10px] border border-[#eaeaea] bg-[#f7efe9]/40 p-6">
                <AlertCircle size={17} className="mb-4 text-[#667085]" />
                <p className="max-w-[430px] text-[13px] leading-relaxed text-[#667085]">
                  The ACH Debit Authorization Agreement authorizes ScriptLinkRx to initiate ACH debit entries to your designated bank account for payment of fees and other amounts owed.
                </p>
              </div>
            </div>
          </div>
          )}
        </div>
      </div>
    </>
  );
}

// ─── Single-Patient Cart ──────────────────────────────────────────────────────

function CartModeToolbar({
  cartMode,
  setCartMode,
  onNavigate,
  onCreatePatient,
}: {
  cartMode: CartMode;
  setCartMode: (mode: CartMode) => void;
  onNavigate: (p: Page) => void;
  onCreatePatient?: () => void;
}) {
  function selectMode(mode: CartMode) {
    setCartMode(mode);
    onNavigate(mode === "multi" ? "cart-multi" : "cart-single");
  }

  return (
    <div className="mb-5 flex flex-wrap items-center gap-3">
      <div className="flex gap-1 rounded-[8px] bg-[#f6f4f5] p-1">
        <button
          onClick={() => selectMode("single")}
          className={`h-8 rounded-[6px] px-4 text-[12px] font-medium transition-all ${
            cartMode === "single" ? "bg-white text-[#1a1a1a] shadow-sm" : "text-[#9d9d9d] hover:text-[#1a1a1a]"
          }`}
        >
          Single Patient
        </button>
        <button
          onClick={() => selectMode("multi")}
          className={`flex h-8 items-center gap-1.5 rounded-[6px] px-4 text-[12px] font-medium transition-all ${
            cartMode === "multi" ? "bg-white text-[#1a1a1a] shadow-sm" : "text-[#9d9d9d] hover:text-[#1a1a1a]"
          }`}
        >
          Multi Patients
          <span className="flex size-3.5 items-center justify-center rounded-full bg-[#053c23] text-[9px] font-semibold text-white">i</span>
        </button>
      </div>

      <div className="flex h-9 w-[220px] items-center gap-2 rounded-[9px] border border-[#efefef] bg-white px-3">
        <Search size={14} strokeWidth={1.8} className="shrink-0 text-[#686868]" />
        <input
          className="min-w-0 flex-1 bg-transparent text-[11px] font-medium text-[#1a1a1a] outline-none placeholder:text-[#686868]"
          placeholder="Search stock or Orders"
        />
        <span className="text-[12px] text-[#686868]">⌘ + F</span>
      </div>

      {onCreatePatient && (
        <button
          onClick={onCreatePatient}
          className="ml-auto inline-flex h-9 items-center gap-1.5 rounded-[7px] bg-[#183229] px-3 text-[12px] font-semibold text-white transition-colors hover:bg-[#244438]"
        >
          <Plus size={14} /> Create Patient
        </button>
      )}
    </div>
  );
}

function SinglePatientCartPage({
  onNavigate,
  cartMode,
  setCartMode,
}: {
  onNavigate: (p: Page) => void;
  cartMode: CartMode;
  setCartMode: (mode: CartMode) => void;
}) {
  const initialPatients = [
    { id: "zeee", name: "Zeee Rabushaj", dob: "06/14/2007", gender: "M", phone: "(646)-389-7766", address: "95 Windermere Drive, Westchester County, NY 10710" },
    { id: "altin", name: "Altin Selimi", dob: "11/12/1994", gender: "M", phone: "(646)-617-9881", address: "95 Windermere Drive, Yonkers, NY 10710" },
    { id: "jane", name: "Jane Doe", dob: "03/22/1990", gender: "F", phone: "5552345678", address: "456 Oak Ave, Los Angeles CA 90001" },
  ];
  const [patients, setPatients] = useState(initialPatients);
  const [patientByPharmacy, setPatientByPharmacy] = useState<Record<string, string>>({});
  const [patientSearch, setPatientSearch] = useState("");
  const [showCreatePatient, setShowCreatePatient] = useState(false);
  const [showPatientPicker, setShowPatientPicker] = useState(false);
  const [activePharmacy, setActivePharmacy] = useState<string | null>(null);
  const [removedItems, setRemovedItems] = useState<Set<number>>(new Set());
  const [previewOpen, setPreviewOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<"patient" | "clinic">("patient");
  const [shipTo, setShipTo] = useState<"patient" | "clinic">("clinic");
  const [prescriptionDetails, setPrescriptionDetails] = useState<Record<number, { days: string; refills: string; directions: string; reason: string }>>({});
  const visiblePatients = patients.filter(patient =>
    `${patient.name} ${patient.phone} ${patient.address}`.toLowerCase().includes(patientSearch.toLowerCase())
  );
  const baseItems = [
    { id: 1, pharmacy: "1st Choice Compounding Pharmacy", name: "Tirzepatide/Pyridoxine (B6)", detail: "20mg/25mg/mL | 1 (0.5mL) Vial", qty: 1, price: 125.43, image: imgPT141, kind: "vial" },
    { id: 2, pharmacy: "1st Choice Compounding Pharmacy", name: "BD 27G X 1/2 Needle Only", detail: "1 Needle", qty: 1, price: 0, image: null, kind: "supply" },
    { id: 5, pharmacy: "Precision Compounding Pharmacy", name: "Aminoblend", detail: "100mg/50mg/50mg/50mg/100mg/mL | 1 (30mL) Vial", qty: 1, price: 35.99, image: img432, kind: "vial" },
  ];
  const items = baseItems.filter(item => !removedItems.has(item.id));
  const prescriptionItems = items.filter(item => item.kind !== "supply");
  const pharmacyGroups = [
    {
      name: "1st Choice Compounding Pharmacy",
      items: items.filter(item => item.pharmacy === "1st Choice Compounding Pharmacy"),
      shipping: ["UPS Next Day Air (Priority): $30.00", "FedEx Standard Overnight: $30.00"],
    },
    {
      name: "Precision Compounding Pharmacy",
      items: items.filter(item => item.pharmacy === "Precision Compounding Pharmacy"),
      shipping: ["FedEx Overnight Refrigerated: $39.00", "UPS Overnight Refrigerated: $39.00"],
    },
  ].filter(pharmacy => pharmacy.items.length > 0);
  const patientForPharmacy = (pharmacyName: string) =>
    patients.find(patient => patient.id === patientByPharmacy[pharmacyName]) ?? null;
  const activePatient = activePharmacy ? patientForPharmacy(activePharmacy) : null;
  const assignedPharmacyCount = pharmacyGroups.filter(pharmacy => patientForPharmacy(pharmacy.name)).length;
  const allPharmaciesAssigned = pharmacyGroups.length > 0 && assignedPharmacyCount === pharmacyGroups.length;
  const prescriptionsComplete = prescriptionItems.every(item => {
    const details = prescriptionDetails[item.id];
    return patientForPharmacy(item.pharmacy) && details?.days && details?.refills && details?.directions && details?.reason;
  });
  const canPreview = allPharmaciesAssigned && prescriptionsComplete;
  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const shipping = pharmacyGroups.reduce((sum, pharmacy) => sum + (Number(pharmacy.shipping[0].match(/\$(\d+(?:\.\d{2})?)/)?.[1] ?? 0)), 0);
  const total = subtotal + shipping;

  function updatePrescriptionDetail(id: number, field: "days" | "refills" | "directions" | "reason", value: string) {
    setPrescriptionDetails(current => ({
      ...current,
      [id]: {
        days: current[id]?.days ?? "",
        refills: current[id]?.refills ?? "",
        directions: current[id]?.directions ?? "",
        reason: current[id]?.reason ?? "",
        [field]: value,
      },
    }));
  }

  function createPatient(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const phone = String(form.get("phone") ?? "").trim();
    const address = String(form.get("address") ?? "").trim();
    if (!name || !phone || !address) return;

    const patient = {
      id: `patient-${Date.now()}`,
      name,
      dob: String(form.get("dob") ?? ""),
      gender: String(form.get("gender") ?? ""),
      phone,
      address,
    };
    setPatients(current => [...current, patient]);
    if (activePharmacy) {
      setPatientByPharmacy(current => ({ ...current, [activePharmacy]: patient.id }));
    }
    setShowCreatePatient(false);
    setShowPatientPicker(false);
    setActivePharmacy(null);
  }

  function SingleCartThumb({ item }: { item: (typeof items)[number] }) {
    if (item.kind === "supply") {
      return (
        <div className="flex size-12 shrink-0 items-center justify-center rounded-[8px] border border-[#eee] bg-[#f6f4f5]">
          <Syringe size={16} strokeWidth={1.7} className="text-[#183229]" />
        </div>
      );
    }

    return (
      <div className="flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-[8px] border border-[#eee] bg-gradient-to-b from-[#f7efe9] to-[#ece5b6]/45">
        {item.image && <img src={item.image} alt="" className="h-12 w-12 object-contain mix-blend-multiply" />}
      </div>
    );
  }

  return (
    <>
      <Header title="Cart" onNavigate={onNavigate} />
      <CartModeToolbar
        cartMode={cartMode}
        setCartMode={setCartMode}
        onNavigate={onNavigate}
        onCreatePatient={() => {
          setActivePharmacy(null);
          setShowPatientPicker(false);
          setShowCreatePatient(true);
        }}
      />

      <div className="grid grid-cols-1 gap-5 2xl:grid-cols-[minmax(0,1fr)_360px]">
        <div className="flex min-w-0 flex-col gap-4">
          {pharmacyGroups.map(pharmacy => {
          const cardPatient = patientForPharmacy(pharmacy.name);
          return (
          <section key={pharmacy.name} className="overflow-hidden rounded-[12px] border border-[#e8e3df] bg-white">
            <div className="flex items-center gap-2 border-b border-[#eee8e3] bg-white px-5 py-4">
              <span className="flex size-7 items-center justify-center rounded-[7px] bg-[#eef5f1] text-[#183229]">
                <Building2 size={15} strokeWidth={1.8} />
              </span>
              <h2 className="text-[15px] font-semibold text-[#1a1a1a]">{pharmacy.name} Cart</h2>
            </div>
            <div className="grid grid-cols-[minmax(0,1fr)_240px_110px_106px_110px_40px] items-center border-b border-[#eee8e3] bg-[#fbfaf8] px-5 py-3 max-lg:hidden">
              {["Product", "Patient", "Price", "Qty", "Total", ""].map(h => (
                <span key={h} className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#8c8c8c]">{h}</span>
              ))}
            </div>

            <div className="divide-y divide-[#eee8e3]">
              {pharmacy.items.map(item => (
                <div key={item.id} className="px-5 py-4 transition-colors hover:bg-[#fffbf8]">
                  <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_240px_110px_106px_110px_40px] lg:items-start">
                    <div className="flex min-w-0 gap-3">
                      <SingleCartThumb item={item} />
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-1.5">
                          <p className="min-w-0 max-w-full break-all text-[16px] font-semibold leading-tight text-[#1a1a1a]">{item.name}</p>
                          {item.kind === "supply" && <span className="rounded-[5px] bg-[#eef0f2] px-1.5 py-0.5 text-[10px] font-semibold text-[#667085]">Supplies</span>}
                        </div>
                        <p className="mt-1 text-[13px] text-[#6f7782]">{item.detail}</p>
                        {item.kind !== "supply" && <p className="mt-3 text-[11px] font-semibold text-[#8c95a1]">Prescription #{prescriptionItems.findIndex(product => product.id === item.id) + 1}</p>}
                      </div>
                    </div>

                    {cardPatient ? (
                      <div className="self-start">
                        <div className="mb-2 flex items-center justify-between gap-2">
                          <div className="flex min-w-0 items-center gap-2">
                            <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#e7efe9]"><User size={11} strokeWidth={1.8} className="text-[#183229]" /></span>
                            <span className="truncate text-[11px] font-semibold uppercase tracking-[0.1em] text-[#52645c]">{cardPatient.name}</span>
                          </div>
                          <button onClick={() => { setActivePharmacy(pharmacy.name); setShowPatientPicker(true); }} className="text-[10px] font-semibold text-[#183229] hover:underline">Change</button>
                        </div>
                        <div className="rounded-[8px] border border-[#eee8e3] bg-[#fffbf8] px-3 py-2.5 text-[11px] font-medium leading-relaxed text-[#6f7782]">
                          <div className="flex items-center gap-1.5"><Phone size={12} strokeWidth={1.8} className="shrink-0 text-[#183229]" /><span>{cardPatient.phone}</span></div>
                          <div className="mt-1 flex items-start gap-1.5"><MapPin size={12} strokeWidth={1.8} className="mt-0.5 shrink-0 text-[#183229]" /><span>{cardPatient.address}</span></div>
                        </div>
                      </div>
                    ) : (
                      <button
                        onClick={() => { setActivePharmacy(pharmacy.name); setShowPatientPicker(true); }}
                        className="inline-flex h-7 w-fit items-center gap-1.5 rounded-full border border-dashed border-[#cfd8d3] bg-white px-2.5 text-[11px] font-bold text-[#334155] transition-colors hover:border-[#183229] hover:bg-[#f8faf9]"
                      >
                        <User size={12} strokeWidth={1.8} className="text-[#52645c]" />
                        <span>Choose patient</span>
                      </button>
                    )}

                    <span className="flex h-5 items-center text-[14px] font-semibold text-[#1a1a1a] lg:justify-center">{item.price === 0 ? "Free" : `$${item.price.toFixed(2)}`}</span>
                    <div className="inline-flex h-8 w-fit overflow-hidden rounded-[7px] border border-[#d8dfdc] bg-white lg:mx-auto">
                      <button className="flex w-8 items-center justify-center border-r border-[#e1e5e3] text-[#183229]"><Minus size={13} /></button>
                      <span className="flex w-9 items-center justify-center text-[13px] font-semibold text-[#1a1a1a]">{item.qty}</span>
                      <button className="flex w-8 items-center justify-center border-l border-[#e1e5e3] text-[#183229]"><Plus size={13} /></button>
                    </div>
                    <span className="flex h-5 items-center text-[14px] font-bold text-[#1a1a1a] lg:justify-center">{item.price === 0 ? "Free" : `$${(item.price * item.qty).toFixed(2)}`}</span>
                    <button
                      onClick={() => setRemovedItems(current => new Set([...current, item.id]))}
                      className="flex size-8 items-center justify-center rounded-[7px] bg-[#f6f4f5] text-[#183229] transition-colors hover:bg-[#fbeaea] hover:text-[#d92d20]"
                      aria-label={`Remove ${item.name}`}
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>

                  {cardPatient && item.kind !== "supply" && (
                    <div className="mt-4 rounded-[10px] border border-[#e8e3df] bg-white p-4">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="text-[16px] font-semibold text-[#1a1a1a]">Prescription for {item.name}</h3>
                        <span className="rounded-full bg-[#f2f7f4] px-2.5 py-1 text-[11px] font-semibold text-[#52645c]">{cardPatient.name}</span>
                      </div>
                      <div className="mt-3">
                        <label className="mb-1.5 block text-[12px] font-semibold text-[#1a1a1a]">Drug Name + Strength</label>
                        <input value={`${item.name} ${item.detail.split("|")[0].trim()}`} readOnly className="h-10 w-full cursor-not-allowed rounded-[7px] border border-[#d8dfdc] bg-[#f4f5f4] px-3 text-[13px] font-medium text-[#7b8380] outline-none" />
                      </div>
                      <div className="mt-4 grid gap-4 md:grid-cols-[minmax(0,1fr)_200px_240px]">
                        <div>
                          <label className="mb-1.5 block text-[12px] font-semibold text-[#1a1a1a]">Qty Size</label>
                          <input value={item.detail.includes("|") ? item.detail.split("|").slice(1).join("|").trim() : item.detail} readOnly className="h-10 w-full cursor-not-allowed rounded-[7px] border border-[#d8dfdc] bg-[#f4f5f4] px-3 text-[13px] font-medium text-[#7b8380] outline-none" />
                        </div>
                        <div>
                          <label className="mb-1.5 block text-[12px] font-semibold text-[#1a1a1a]">Days Supply</label>
                          <input
                            type="number"
                            min="1"
                            value={prescriptionDetails[item.id]?.days ?? ""}
                            onChange={event => updatePrescriptionDetail(item.id, "days", event.target.value)}
                            placeholder="Days"
                            className="h-10 w-full rounded-[7px] border border-[#d8dfdc] bg-white px-3 text-[13px] font-medium text-[#6f7782] outline-none placeholder:text-[#b9c0bc] focus:border-[#183229]"
                          />
                        </div>
                        <div>
                          <label className="mb-1.5 block text-[12px] font-semibold text-[#1a1a1a]">Authorized Refills</label>
                          <input
                            type="number"
                            min="0"
                            value={prescriptionDetails[item.id]?.refills ?? ""}
                            onChange={event => updatePrescriptionDetail(item.id, "refills", event.target.value)}
                            placeholder="Refills"
                            className="h-10 w-full rounded-[7px] border border-[#d8dfdc] bg-white px-3 text-[13px] font-medium text-[#6f7782] outline-none placeholder:text-[#b9c0bc] focus:border-[#183229]"
                          />
                        </div>
                      </div>
                      <div className="mt-4 grid gap-4 md:grid-cols-2">
                        <div>
                          <label className="mb-1.5 block text-[12px] font-semibold text-[#1a1a1a]">Directions of Use</label>
                          <select
                            value={prescriptionDetails[item.id]?.directions ?? ""}
                            onChange={event => updatePrescriptionDetail(item.id, "directions", event.target.value)}
                            className="h-10 w-full rounded-[7px] border border-[#d8dfdc] bg-white py-0 pl-3 pr-8 text-[13px] font-medium text-[#6f7782] outline-none focus:border-[#183229]"
                          >
                            <option value="" disabled>Select directions</option>
                            <option>Use as directed by prescriber</option>
                            <option>Take once daily as directed.</option>
                            <option>Inject subcutaneously once weekly.</option>
                          </select>
                        </div>
                        <div>
                          <label className="mb-1.5 block text-[12px] font-semibold text-[#1a1a1a]">Reason to Compound*</label>
                          <select
                            value={prescriptionDetails[item.id]?.reason ?? ""}
                            onChange={event => updatePrescriptionDetail(item.id, "reason", event.target.value)}
                            className="h-10 w-full rounded-[7px] border border-[#d8dfdc] bg-white py-0 pl-3 pr-8 text-[13px] font-medium text-[#6f7782] outline-none focus:border-[#183229]"
                          >
                            <option value="" disabled>Select reason below or type out your own</option>
                            <option>Patient requires a dosage form not commercially available.</option>
                            <option>Patient requires excipient avoidance.</option>
                            <option>Prescriber requested custom strength.</option>
                          </select>
                        </div>
                      </div>
                      <div className="mt-4">
                        <label className="mb-1.5 block text-[12px] font-semibold text-[#1a1a1a]">Prescription Note (Optional)</label>
                        <textarea placeholder="Enter Prescription Note" className="min-h-[72px] w-full resize-y rounded-[7px] border border-[#d8dfdc] bg-white px-3 py-3 text-[13px] font-medium text-[#6f7782] outline-none placeholder:text-[#b9c0bc] focus:border-[#183229]" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="border-t border-[#eee8e3] bg-white px-5 py-5">
              <h3 className="text-[16px] font-semibold text-[#1a1a1a]">Shipping options</h3>
              <div className="mt-4 flex flex-wrap gap-2 rounded-[10px] bg-[#f6f4f5] p-2">
                {pharmacy.shipping.map((option, index) => (
                  <button key={option} className={`h-9 rounded-[7px] px-3 text-[12px] font-medium ${index === 0 ? "bg-[#183229] text-white" : "bg-white text-[#1a1a1a]"}`}>
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </section>
          );
          })}
        </div>

        <aside className="overflow-hidden rounded-[12px] border border-[#e8e3df] bg-white 2xl:sticky 2xl:top-4">
          <div className="border-b border-[#eee8e3] bg-[#fbfaf8] px-5 py-4">
            <p className="text-[15px] font-semibold text-[#1a1a1a]">Order Total</p>
            <p className="mt-0.5 text-[12px] text-[#6f7782]">{assignedPharmacyCount} of {pharmacyGroups.length} pharmacy carts assigned</p>
          </div>
          <div className="flex flex-col gap-4 px-5 py-4">
            <div className="space-y-2">
              {pharmacyGroups.map(pharmacy => {
                const patient = patientForPharmacy(pharmacy.name);
                return (
                  <button
                    key={pharmacy.name}
                    onClick={() => { setActivePharmacy(pharmacy.name); setShowPatientPicker(true); }}
                    className={`w-full rounded-[9px] border px-3 py-2.5 text-left transition-colors ${patient ? "border-[#eee8e3] bg-[#fffbf8]" : "border-dashed border-[#aebbb5] bg-[#f8faf9]"}`}
                  >
                    <p className="truncate text-[10px] font-semibold uppercase tracking-[0.1em] text-[#667085]">{pharmacy.name}</p>
                    {patient ? (
                      <>
                        <p className="mt-1 text-[12px] font-semibold text-[#1a1a1a]">{patient.name} ({patient.gender})</p>
                        <p className="mt-0.5 text-[11px] text-[#6f7782]">{patient.phone}</p>
                      </>
                    ) : (
                      <span className="mt-2 inline-flex h-7 w-fit items-center gap-1.5 rounded-full border border-dashed border-[#cfd8d3] bg-white px-2.5 text-[11px] font-bold text-[#334155]">
                        <User size={12} strokeWidth={1.8} className="text-[#52645c]" />
                        Choose patient
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
            <div className="border-t border-[#eee8e3] pt-4">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#667085]">Items</p>
              <div className="flex flex-col gap-3">
                {prescriptionItems.map(item => (
                  <div key={item.id} className="grid grid-cols-[minmax(0,1fr)_auto] gap-x-3 gap-y-1">
                    <p className="truncate text-[12px] font-semibold leading-tight text-[#1a1a1a]">{item.name}</p>
                    <span className="text-right text-[12px] font-semibold text-[#1a1a1a]">${(item.price * item.qty).toFixed(2)}</span>
                    <p className="col-span-2 text-[11px] text-[#6f7782]">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-between text-[12px] text-[#6f7782]">
              <span>Items subtotal</span><span className="font-semibold text-[#1a1a1a]">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-[12px] text-[#6f7782]">
              <span>Shipping</span><span className="font-semibold text-[#1a1a1a]">${shipping.toFixed(2)}</span>
            </div>
            <div className="flex items-end justify-between border-t border-[#eee8e3] pt-3">
              <span className="text-[14px] font-bold text-[#1a1a1a]">Total</span><span className="text-[19px] font-bold text-[#183229]">${total.toFixed(2)}</span>
            </div>
            <button disabled={!canPreview} onClick={() => setPreviewOpen(true)} className="h-11 w-full rounded-[8px] bg-[#183229] text-[13px] font-semibold text-white transition-colors hover:bg-[#244438] disabled:cursor-not-allowed disabled:bg-[#c8cecb]">
              {!allPharmaciesAssigned
                ? `Assign ${pharmacyGroups.length - assignedPharmacyCount} more ${pharmacyGroups.length - assignedPharmacyCount === 1 ? "patient" : "patients"}`
                : prescriptionsComplete ? "Continue: Preview" : "Complete required fields"}
            </button>
          </div>
        </aside>
      </div>

      {previewOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-[#1a1a1a]/35 backdrop-blur-[2px]">
          <button className="absolute inset-0 cursor-default" onClick={() => setPreviewOpen(false)} aria-label="Close preview" />
          <aside className="relative h-full w-full max-w-[460px] overflow-auto border-l border-[#e8e3df] bg-white px-6 py-6">
            <button onClick={() => setPreviewOpen(false)} className="mb-5 flex size-8 items-center justify-center rounded-[7px] text-[#183229] hover:bg-[#f6f4f5]" aria-label="Close preview">
              <XCircle size={18} />
            </button>
            <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#667085]">Preview</p>
            <h2 className="mt-1 text-[22px] font-semibold text-[#1a1a1a]">Single-patient checkout</h2>
            <p className="mt-1 text-[12px] text-[#6f7782]">Review assigned patients, prescriptions, payment, and shipping before submitting.</p>

            <section className="mt-6">
              <h3 className="border-b border-[#eee8e3] pb-3 text-[15px] font-semibold text-[#1a1a1a]">Order for</h3>
              <div className="mt-4 flex flex-col gap-3">
                {pharmacyGroups.map(pharmacy => {
                  const patient = patientForPharmacy(pharmacy.name);
                  if (!patient) return null;
                  return (
                    <div key={pharmacy.name} className="rounded-[10px] border border-[#e8e3df] bg-[#fffbf8] px-4 py-3">
                      <p className="text-[13px] font-semibold text-[#1a1a1a]">{patient.name} ({patient.gender})</p>
                      <p className="mt-1 text-[12px] text-[#6f7782]">{patient.phone}</p>
                      <p className="mt-1 text-[12px] leading-relaxed text-[#6f7782]">{patient.address}</p>
                    </div>
                  );
                })}
              </div>
            </section>

            <section className="mt-6">
              <h3 className="border-b border-[#eee8e3] pb-3 text-[15px] font-semibold text-[#1a1a1a]">Prescriptions</h3>
              <div className="mt-4 flex flex-col gap-3">
                {prescriptionItems.map(item => {
                  const patient = patientForPharmacy(item.pharmacy);
                  return (
                    <div key={item.id} className="rounded-[10px] border border-[#e8e3df] px-4 py-4">
                      <div className="flex justify-between gap-4">
                        <div className="min-w-0">
                          <p className="text-[13px] font-semibold text-[#1a1a1a]">{item.name}</p>
                          <p className="mt-1 text-[12px] text-[#6f7782]">{item.detail}</p>
                          <p className="mt-1 text-[11px] text-[#8c95a1]">{patient ? patient.name : item.pharmacy}</p>
                        </div>
                        <p className="shrink-0 text-[13px] font-semibold text-[#1a1a1a]">${(item.price * item.qty).toFixed(2)}</p>
                      </div>
                      <div className="mt-3 grid grid-cols-2 gap-2 text-[11px] text-[#6f7782]">
                        <span>Days Supply: <strong className="text-[#1a1a1a]">1</strong></span>
                        <span>Refills: <strong className="text-[#1a1a1a]">1</strong></span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            <section className="mt-6">
              <div className="border-b border-[#eee8e3] pb-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#667085]">Payment</p>
                <p className="mt-1 text-[13px] text-[#1a1a1a]">Select the payment method for the prescription</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <button
                    onClick={() => setPaymentMethod("patient")}
                    className={`inline-flex h-9 items-center gap-2 rounded-full border px-3 text-[12px] font-semibold transition-colors ${
                      paymentMethod === "patient"
                        ? "border-[#17a34a] bg-[#d4f4e3] text-[#183229]"
                        : "border-[#d8dfdc] bg-white text-[#6f7782] hover:border-[#183229]/45"
                    }`}
                  >
                    Pay by Patient <User size={13} />
                  </button>
                  <button
                    onClick={() => setPaymentMethod("clinic")}
                    className={`inline-flex h-9 items-center gap-2 rounded-full border px-3 text-[12px] font-semibold transition-colors ${
                      paymentMethod === "clinic"
                        ? "border-[#17a34a] bg-[#d4f4e3] text-[#183229]"
                        : "border-[#d8dfdc] bg-white text-[#6f7782] hover:border-[#183229]/45"
                    }`}
                  >
                    Pay by Clinic <Building2 size={13} />
                  </button>
                  <button className="inline-flex h-9 items-center gap-1.5 rounded-full border border-dashed border-[#17a34a] bg-white px-3 text-[12px] font-semibold text-[#0a8f3c] transition-colors hover:bg-[#f2f7f4]">
                    <Plus size={13} /> Credit Card
                  </button>
                </div>
              </div>

              <div className="pt-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#667085]">Shipping</p>
                <p className="mt-1 text-[13px] text-[#1a1a1a]">Choose where to ship the prescription</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <button
                    onClick={() => setShipTo("patient")}
                    className={`inline-flex h-9 items-center gap-2 rounded-full border px-3 text-[12px] font-semibold transition-colors ${
                      shipTo === "patient"
                        ? "border-[#17a34a] bg-[#d4f4e3] text-[#183229]"
                        : "border-[#d8dfdc] bg-white text-[#6f7782] hover:border-[#183229]/45"
                    }`}
                  >
                    Ship to Patient <User size={13} />
                  </button>
                  <button
                    onClick={() => setShipTo("clinic")}
                    className={`inline-flex h-9 items-center gap-2 rounded-full border px-3 text-[12px] font-semibold transition-colors ${
                      shipTo === "clinic"
                        ? "border-[#0fbf9f] bg-[#d9fbf4] text-[#183229]"
                        : "border-[#d8dfdc] bg-white text-[#6f7782] hover:border-[#183229]/45"
                    }`}
                  >
                    Ship to Clinic <Building2 size={13} />
                  </button>
                </div>
              </div>
            </section>

            <section className="mt-6">
              <h3 className="border-b border-[#eee8e3] pb-3 text-[15px] font-semibold text-[#1a1a1a]">Summary</h3>
              <div className="mt-4 space-y-3 text-[14px]">
                <div className="flex justify-between text-[#6f7782]"><span>Items subtotal</span><span className="font-semibold text-[#1a1a1a]">${subtotal.toFixed(2)}</span></div>
                <div className="flex justify-between text-[#6f7782]"><span>Shipping</span><span className="font-semibold text-[#1a1a1a]">${shipping.toFixed(2)}</span></div>
                <div className="flex justify-between border-t border-[#eee8e3] pt-4 font-bold text-[#1a1a1a]"><span>Total</span><span className="text-[#183229]">${total.toFixed(2)}</span></div>
              </div>
            </section>

            <div className="sticky bottom-0 -mx-6 mt-8 flex gap-2 border-t border-[#eee8e3] bg-white px-6 py-4">
              <button onClick={() => setPreviewOpen(false)} className="flex h-10 flex-1 items-center justify-center gap-2 rounded-[8px] border border-[#183229] text-[13px] font-semibold text-[#183229]">
                <ChevronLeft size={15} /> Edit cart
              </button>
              <button onClick={() => onNavigate("orders")} className="flex h-10 flex-1 items-center justify-center gap-2 rounded-[8px] bg-[#183229] text-[13px] font-semibold text-white">
                <CheckCircle2 size={15} /> Submit for Approval
              </button>
            </div>
          </aside>
        </div>
      )}

      {(showPatientPicker || showCreatePatient) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/25 p-4" role="dialog" aria-modal="true" aria-label={showCreatePatient ? "Create patient" : "Choose patient"}>
          <div className="w-full max-w-[620px] overflow-hidden rounded-[10px] border border-[#e8e3df] bg-white">
            <div className="flex items-center justify-between border-b border-[#eee8e3] px-5 py-4">
              <div>
                <h2 className="text-[16px] font-semibold text-[#1a1a1a]">{showCreatePatient ? "Create Patient" : "Choose Patient"}</h2>
                <p className="mt-0.5 text-[11px] text-[#6f7782]">{showCreatePatient ? (activePharmacy ? `Add and assign to ${activePharmacy}.` : "Add a patient to your patient list.") : `Assign a patient to ${activePharmacy ?? "this pharmacy cart"}.`}</p>
              </div>
              <button
                onClick={() => {
                  setShowPatientPicker(false);
                  setShowCreatePatient(false);
                }}
                className="flex size-8 items-center justify-center rounded-[7px] text-[#6f7782] hover:bg-[#f6f4f5]"
                aria-label="Close"
              >
                <XCircle size={17} />
              </button>
            </div>

            {showCreatePatient ? (
              <form onSubmit={createPatient} className="p-5">
                <div className="grid gap-3 sm:grid-cols-2">
                  <input name="name" required placeholder="Full name" className="h-10 rounded-[7px] border border-[#d8dfdc] bg-white px-3 text-[12px] outline-none placeholder:text-[#9da4ae] focus:border-[#183229]" />
                  <input name="phone" required placeholder="Phone number" className="h-10 rounded-[7px] border border-[#d8dfdc] bg-white px-3 text-[12px] outline-none placeholder:text-[#9da4ae] focus:border-[#183229]" />
                  <input name="dob" type="date" aria-label="Date of birth" className="h-10 rounded-[7px] border border-[#d8dfdc] bg-white px-3 text-[12px] text-[#6f7782] outline-none focus:border-[#183229]" />
                  <select name="gender" defaultValue="" aria-label="Gender" className="h-10 rounded-[7px] border border-[#d8dfdc] bg-white px-3 text-[12px] text-[#6f7782] outline-none focus:border-[#183229]">
                    <option value="" disabled>Gender</option>
                    <option value="F">Female</option>
                    <option value="M">Male</option>
                    <option value="X">Other</option>
                  </select>
                  <input name="address" required placeholder="Full shipping address" className="h-10 rounded-[7px] border border-[#d8dfdc] bg-white px-3 text-[12px] outline-none placeholder:text-[#9da4ae] focus:border-[#183229] sm:col-span-2" />
                </div>
                <div className="mt-5 flex justify-end gap-2">
                  <button type="button" onClick={() => setShowCreatePatient(false)} className="h-9 rounded-[7px] border border-[#d8dfdc] bg-white px-3 text-[12px] font-semibold text-[#183229]">Cancel</button>
                  <button type="submit" className="h-9 rounded-[7px] bg-[#183229] px-4 text-[12px] font-semibold text-white">Save and select</button>
                </div>
              </form>
            ) : (
              <div className="p-5">
                <div className="flex h-10 items-center gap-2 rounded-[8px] border border-[#d8dfdc] bg-white px-3">
                  <Search size={14} strokeWidth={1.8} className="shrink-0 text-[#6f7782]" />
                  <input autoFocus value={patientSearch} onChange={event => setPatientSearch(event.target.value)} className="min-w-0 flex-1 bg-transparent text-[12px] outline-none placeholder:text-[#9da4ae]" placeholder="Search patients" />
                </div>
                <div className="mt-3 max-h-[320px] space-y-2 overflow-y-auto pr-1">
                  {visiblePatients.map(patient => {
                    const isSelected = activePatient?.id === patient.id;
                    return (
                      <button
                        key={patient.id}
                        onClick={() => {
                          if (activePharmacy) {
                            setPatientByPharmacy(current => ({ ...current, [activePharmacy]: patient.id }));
                          }
                          setShowPatientPicker(false);
                          setPatientSearch("");
                          setActivePharmacy(null);
                        }}
                        className={`flex w-full items-center justify-between gap-4 rounded-[8px] border px-3 py-3 text-left transition-colors ${isSelected ? "border-[#183229] bg-[#f2f7f4]" : "border-[#e8e3df] hover:border-[#183229]/35"}`}
                      >
                        <div className="min-w-0">
                          <p className="text-[12px] font-semibold text-[#1a1a1a]">{patient.name} ({patient.gender})</p>
                          <p className="mt-1 text-[11px] text-[#6f7782]">{patient.phone} · {patient.address}</p>
                        </div>
                        {isSelected && <CheckCircle2 size={15} className="shrink-0 text-[#183229]" />}
                      </button>
                    );
                  })}
                  {visiblePatients.length === 0 && <p className="py-8 text-center text-[12px] text-[#6f7782]">No patients found.</p>}
                </div>
                <div className="mt-4 flex items-center justify-between border-t border-[#eee8e3] pt-4">
                  <p className="text-[11px] text-[#6f7782]">Patient not listed?</p>
                  <button
                    onClick={() => {
                      setShowPatientPicker(false);
                      setShowCreatePatient(true);
                    }}
                    className="inline-flex h-9 items-center gap-1.5 rounded-[7px] bg-[#183229] px-3 text-[12px] font-semibold text-white"
                  >
                    <Plus size={14} /> Create Patient
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

// ─── Multi-Patient Cart ───────────────────────────────────────────────────────

const MULTI_CART_DATA = {
  pharmacy: "Optimal Balance Pharmacy",
  patients: [
    {
      name: "Altin Selimi",
      dob: "05/01/1986",
      phone: "(646)-389-7766",
      email: "altin.selimi@example.com",
      identification: "NY:23444244343 (State-Issued ID)",
      address: "2823 Middletown Road\nThe Bronx, NY 10461",
      items: [
        { id: 1, name: "Tirzepatide/Pyridoxine (B6)", detail: "20mg/25mg/mL | 1 (0.5mL) Vial", qty: 7, price: 125.43, badge: null, kind: "vial", pharmacy: "Optimal Balance Pharmacy" },
        { id: 2, name: "BD 27G X 1/2 Needle Only", detail: "1 Needle", qty: 1, price: 0, badge: "Supplies", kind: "supply" },
      ],
    },
    {
      name: "Jane Doe",
      dob: "03/22/1988",
      phone: "(646)-617-1880",
      email: "jane.doe@example.com",
      identification: "NY:98221443819 (State-Issued ID)",
      address: "95 Windermere Drive\nWestchester County, NY 10710",
      items: [
        { id: 3, name: "Tirzepatide/Pyridoxine (B6)", detail: "20mg/25mg/mL | 1 (0.5mL) Vial", qty: 1, price: 125.43, badge: null, kind: "vial", pharmacy: "Optimal Balance Pharmacy" },
        { id: 4, name: "BD 27G X 1/2 Needle Only", detail: "1 Needle", qty: 1, price: 0, badge: "Supplies", kind: "supply" },
      ],
    },
    {
      name: "Emily Krause",
      dob: "08/14/1991",
      phone: "(646)-389-4455",
      email: "emily.krause@example.com",
      identification: "NY:77120549331 (State-Issued ID)",
      address: "2823 Middletown Road\nBronx, NY 10461",
      items: [
        { id: 5, name: "NAD+ Injection", detail: "20mg/25mg/mL | 1 (0.5mL) Vial", qty: 1, price: 84.50, badge: null, kind: "vial", pharmacy: "DCA Pharmacy", image: imgNadInjection },
      ],
    },
  ],
  shipping: [
    { label: "UPS Next Day Air (Priority)", price: 35.00 },
    { label: "FedEx Standard Overnight", price: 35.00 },
  ],
};

// Shipping capability is configured per pharmacy. Pharmacies without multi-patient
// shipping create one shipment (and one shipping charge) for each patient.
const PHARMACY_MULTI_PATIENT_SHIPPING: Record<string, boolean> = {
  "1st Choice Compounding Pharmacy": true,
  "Optimal Balance Pharmacy": true,
  "DCA Pharmacy": false,
  "Thesis Pharmacy": true,
  "Rush Pharmacy TX": false,
  "Spring Creek Pharmacy": false,
};

function supportsMultiPatientShipping(pharmacy: string) {
  return PHARMACY_MULTI_PATIENT_SHIPPING[pharmacy] ?? false;
}

type MultiCartItem = {
  id: number;
  name: string;
  detail: string;
  qty: number;
  price: number;
  badge: string | null;
  kind: "vial" | "supply";
  image?: string;
  pharmacy?: string;
};

function CartItemImage({ item }: { item: MultiCartItem }) {
  if (item.kind === "supply") {
    return (
      <div className="w-12 h-12 rounded-[8px] bg-[#f6f4f5] border border-[#eee] flex items-center justify-center shrink-0">
        <div className="w-7 h-7 rounded-full bg-white border border-[#e8e8e8] flex items-center justify-center">
          <Syringe size={15} strokeWidth={1.7} className="text-[#183229]" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden bg-white">
      <img src={item.image ?? imgAminoQuad} alt={item.name} className="h-14 w-14 object-contain mix-blend-multiply" />
    </div>
  );
}

function MultiPatientCartPage({
  onNavigate,
  cartMode,
  setCartMode,
  selectedPatientIds,
  cartEntries,
}: {
  onNavigate: (p: Page) => void;
  cartMode: CartMode;
  setCartMode: (mode: CartMode) => void;
  selectedPatientIds: number[];
  cartEntries: PatientCartEntry[];
}) {
  const { runWithAppLoader } = useAppLoading();
  const cartData = useMemo(() => cartEntries.length > 0
    ? {
        ...MULTI_CART_DATA,
        pharmacy: [...new Set(cartEntries.map(entry => entry.pharmacy))].length === 1 ? cartEntries[0].pharmacy : "Multiple Pharmacies",
        patients: [...new Set(cartEntries.map(entry => entry.patientId))].map(patientId => {
          const patient = PATIENTS[patientId] ?? PATIENTS[0];
          const entries = cartEntries.filter(entry => entry.patientId === patientId);
          const addressLines = [patient.address1, patient.address2, `${patient.city}, ${patient.state} ${patient.zip}`].filter(Boolean);
          return {
            name: `${patient.firstName} ${patient.lastName}`,
            dob: patient.birthDate,
            phone: patient.primaryPhone,
            email: `${patient.firstName}.${patient.lastName}`.replace(/[^a-z0-9.]/gi, "").toLowerCase() + "@example.com",
            identification: `${patient.state}:23444244343 (State-Issued ID)`,
            address: addressLines.join("\n"),
            items: entries.map(entry => ({
              id: entry.id,
              name: entry.product.name,
              detail: `${entry.strength} | ${entry.size}`,
              qty: entry.qty,
              price: entry.unitPrice,
              badge: null,
              kind: "vial" as const,
              image: entry.product.img,
              pharmacy: entry.pharmacy,
            })),
          };
        }),
      }
    : selectedPatientIds.length > 0
    ? {
        ...MULTI_CART_DATA,
        patients: selectedPatientIds.map((patientId, index) => {
          const patient = PATIENTS[patientId] ?? PATIENTS[0];
          const name = `${patient.firstName} ${patient.lastName}`;
          const addressLines = [
            patient.address1,
            patient.address2,
            `${patient.city}, ${patient.state} ${patient.zip}`,
          ].filter(Boolean);
          return {
            name,
            dob: patient.birthDate,
            phone: patient.primaryPhone,
            email: `${patient.firstName}.${patient.lastName}`.replace(/[^a-z0-9.]/gi, "").toLowerCase() + "@example.com",
            identification: `${patient.state}:23444244343 (State-Issued ID)`,
            address: addressLines.join("\n"),
            items: [
              { id: index * 2 + 1, name: "Tirzepatide/Pyridoxine (B6)", detail: "20mg/25mg/mL | 1 (0.5mL) Vial", qty: 1, price: 125.43, badge: null, kind: "vial" as const },
              { id: index * 2 + 2, name: "BD 27G X 1/2 Needle Only", detail: "1 Needle", qty: 1, price: 0, badge: "Supplies", kind: "supply" as const },
            ],
          };
        }),
      }
    : MULTI_CART_DATA, [cartEntries, selectedPatientIds]);
  const [quantities, setQuantities] = useState<Record<number, number>>(() => {
    const init: Record<number, number> = {};
    cartData.patients.forEach(p => p.items.forEach(i => { init[i.id] = i.qty; }));
    return init;
  });
  const [selectedShippingByPharmacy, setSelectedShippingByPharmacy] = useState<Record<string, number>>({});
  const [removed, setRemoved] = useState<Set<number>>(new Set());
  const [showAllSummaryItems, setShowAllSummaryItems] = useState(false);
  const [expandedSupplies, setExpandedSupplies] = useState<Set<number>>(new Set([1]));
  const [previewOpen, setPreviewOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<"patient" | "clinic">("patient");
  const [shipTo, setShipTo] = useState<"patient" | "clinic">("clinic");
  const [prescriptionDetails, setPrescriptionDetails] = useState<Record<number, { days: string; refills: string; directions: string; reason: string }>>({});
  const [prescriptionValidationAttempted, setPrescriptionValidationAttempted] = useState(false);
  const [addedPrescriptionIds, setAddedPrescriptionIds] = useState<Set<number>>(new Set());
  const [expandedPrescriptionIds, setExpandedPrescriptionIds] = useState<Set<number>>(() => {
    const firstPrescription = cartData.patients.flatMap(patient => patient.items).find(item => item.kind !== "supply");
    return new Set(firstPrescription ? [firstPrescription.id] : []);
  });

  useEffect(() => {
    setQuantities(prev => {
      const next = { ...prev };
      cartData.patients.forEach(patient => patient.items.forEach(item => {
        if (next[item.id] === undefined) next[item.id] = item.qty;
      }));
      return next;
    });
  }, [cartData]);

  const pharmacyNames = [...new Set(cartData.patients.flatMap(patient =>
    patient.items.filter(item => item.kind !== "supply").map(item => item.pharmacy ?? cartData.pharmacy)
  ))];
  const shipping = pharmacyNames.reduce((sum, pharmacy) => {
    const shippingIndex = selectedShippingByPharmacy[pharmacy] ?? 0;
    const patientCount = new Set(cartData.patients
      .filter(patient => patient.items.some(item => item.kind !== "supply" && !removed.has(item.id) && (item.pharmacy ?? cartData.pharmacy) === pharmacy))
      .map(patient => patient.name)).size;
    const shipmentCount = supportsMultiPatientShipping(pharmacy) ? 1 : Math.max(1, patientCount);
    return sum + cartData.shipping[shippingIndex].price * shipmentCount;
  }, 0);
  const subtotal = cartData.patients.flatMap(p => p.items)
    .filter(i => !removed.has(i.id))
    .reduce((sum, i) => sum + i.price * (quantities[i.id] ?? 1), 0);
  const total = subtotal + shipping;

  function adjust(id: number, delta: number) {
    setQuantities(prev => ({ ...prev, [id]: Math.max(1, (prev[id] ?? 1) + delta) }));
  }

  function toggleSupplies(id: number) {
    setExpandedSupplies(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  function updatePrescriptionDetail(id: number, field: "days" | "refills" | "directions" | "reason", value: string) {
    setPrescriptionDetails(current => ({
      ...current,
      [id]: {
        days: current[id]?.days ?? "1",
        refills: current[id]?.refills ?? "1",
        directions: current[id]?.directions ?? "Inject (2.5 mg) subcutaneously once weekly.",
        reason: current[id]?.reason ?? "",
        [field]: value,
      },
    }));
  }

  function prescriptionFieldClass(value: string) {
    const complete = value.trim().length > 0;
    const state = complete
      ? "border-[#78a98f] bg-[#f6fbf8] focus:border-[#315a47]"
      : "border-[#e39a91] bg-[#fff8f7] focus:border-[#c94f43]";
    return `h-10 w-full rounded-[8px] border px-3 text-[13px] font-medium text-[#4f5b56] outline-none transition-colors ${state}`;
  }

  function PrescriptionFieldStatus({ value }: { value: string }) {
    const complete = value.trim().length > 0;
    return (
      <span className={`ml-2 inline-flex items-center gap-1 text-[9px] font-semibold ${complete ? "text-[#397052]" : "text-[#c94f43]"}`}>
        {complete ? <CheckCircle2 size={11} /> : <AlertCircle size={11} />}
        {complete ? "Complete" : "Required"}
      </span>
    );
  }

  const allItems = cartData.patients.flatMap(p => p.items).filter(i => !removed.has(i.id));
  const summaryItemPreviewCount = 3;
  const hiddenSummaryItemCount = Math.max(0, allItems.length - summaryItemPreviewCount);
  const visibleSummaryItems = showAllSummaryItems ? allItems : allItems.slice(0, summaryItemPreviewCount);
  const cartRows = cartData.patients.flatMap(patient =>
    patient.items
      .filter(item => item.kind !== "supply")
      .map(item => ({ patient, item }))
  ).filter(({ item }) => !removed.has(item.id));
  const cartRowsWithNumbers = cartRows.map((row, index) => ({ ...row, prescriptionNumber: index + 1 }));
  const prescriptionCount = cartData.patients.length;
  const prescriptionsComplete = cartRows.every(({ item }) => {
    const details = prescriptionDetails[item.id];
    return Boolean(details?.days.trim() && details?.refills.trim() && details?.directions.trim() && details?.reason.trim());
  });

  function isPrescriptionComplete(id: number) {
    const details = prescriptionDetails[id];
    return Boolean(details?.days.trim() && details?.refills.trim() && details?.directions.trim() && details?.reason.trim());
  }

  function requiredFieldClass(value: string | undefined) {
    return prescriptionValidationAttempted && !value?.trim()
      ? "border-[#c94f43] bg-[#fff8f7] focus:border-[#c94f43]"
      : "border-[#EAE8E1] bg-white focus:border-[#183229]";
  }

  function handleCheckout() {
    if (prescriptionsComplete) {
      runWithAppLoader(() => onNavigate("orders"), 1000);
      return;
    }
    setPrescriptionValidationAttempted(true);
    setExpandedPrescriptionIds(new Set(cartRows.filter(({ item }) => !isPrescriptionComplete(item.id)).map(({ item }) => item.id)));
  }

  return (
    <>
      <Header title="Cart" onNavigate={onNavigate} />

      <div className="max-w-[1300px]">
        <div className="grid grid-cols-1 items-start gap-10 xl:grid-cols-[minmax(0,1fr)_320px]">
          <section className="min-w-0">
            {cartRowsWithNumbers.map(({ patient, item }, rowIndex) => {
              const pharmacy = item.pharmacy ?? cartData.pharmacy;
              const isFirstInPharmacy = rowIndex === 0 || (cartRowsWithNumbers[rowIndex - 1].item.pharmacy ?? cartData.pharmacy) !== pharmacy;
              const isLastInPharmacy = rowIndex === cartRowsWithNumbers.length - 1 || (cartRowsWithNumbers[rowIndex + 1].item.pharmacy ?? cartData.pharmacy) !== pharmacy;
              const includedSupplies = patient.items.filter(supply => supply.kind === "supply" && !removed.has(supply.id));
              const isExpanded = expandedPrescriptionIds.has(item.id);
              const details = prescriptionDetails[item.id];
              const selectedShipping = selectedShippingByPharmacy[pharmacy] ?? 0;
              const pharmacyPatientCount = new Set(cartRowsWithNumbers.filter(row => (row.item.pharmacy ?? cartData.pharmacy) === pharmacy).map(row => row.patient.name)).size;
              const multiPatientShipping = supportsMultiPatientShipping(pharmacy);
              const shipmentCount = multiPatientShipping ? 1 : Math.max(1, pharmacyPatientCount);
              const pharmacyShippingTotal = cartData.shipping[selectedShipping].price * shipmentCount;

              return (
                <Fragment key={item.id}>
                  {isFirstInPharmacy && (
                    <div className={(rowIndex === 0 ? "" : "mt-7 ") + "rounded-t-[10px] bg-[#fffaf7] px-5 pb-4 pt-5"}>
                      <div className="flex items-center justify-between gap-4">
                        <h2 className="text-[16px] font-medium text-[#171717]">{pharmacy} Cart</h2>
                        <div className="flex flex-wrap items-center justify-end gap-2">
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[10px] font-semibold text-[#303030]">
                            <CreditCard size={13} />
                            Pay by patient
                          </span>
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[10px] font-semibold text-[#303030]">
                            {pharmacyPatientCount > 1 ? <Building2 size={13} /> : <User size={13} />}
                            {pharmacyPatientCount > 1 ? "Ship to clinic" : "Ship to patient"}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  <article className={"relative border-x-[12px] border-b-[12px] border-[#fffaf7] bg-white px-5 " + (isExpanded ? "pb-5 pt-5" : "py-7")}>
                    <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(270px,1fr)_210px_112px_90px] lg:items-start">
                      <div className="flex min-w-0 gap-4">
                        <CartItemImage item={item} />
                        <div className="min-w-0">
                          <p className="text-[14px] font-semibold leading-tight text-[#191919]">{item.name}</p>
                          <p className="mt-1 text-[13px] text-[#858585]">{item.detail}</p>
                          {includedSupplies.length > 0 && (
                            <button onClick={() => toggleSupplies(item.id)} className="mt-2 inline-flex items-center gap-1 text-[12px] text-[#666] underline underline-offset-4">
                              Included Supplies
                              <ChevronDown size={13} className={expandedSupplies.has(item.id) ? "rotate-180 transition-transform" : "transition-transform"} />
                            </button>
                          )}
                        </div>
                      </div>

                      <div className="text-[12px] leading-[18px] text-[#555]">
                        <p className="text-[14px] font-medium text-[#292929]">{patient.name}</p>
                        <p className="mt-1 whitespace-pre-line">{patient.address}</p>
                        <p>{patient.phone}</p>
                      </div>

                      <div className="inline-flex h-10 w-fit items-center overflow-hidden rounded-full border border-[#e2e2e2] bg-white">
                        {(quantities[item.id] ?? 1) === 1 ? (
                          <button onClick={() => setRemoved(current => new Set([...current, item.id]))} className="flex h-10 w-10 items-center justify-center text-[#202020] hover:bg-[#f7f7f7]" aria-label={"Remove " + item.name}><Trash2 size={15} /></button>
                        ) : (
                          <button onClick={() => adjust(item.id, -1)} className="flex h-10 w-10 items-center justify-center text-[#202020] hover:bg-[#f7f7f7]" aria-label={"Decrease " + item.name}><Minus size={16} /></button>
                        )}
                        <span className="flex h-10 w-8 items-center justify-center text-[13px] font-medium">{quantities[item.id] ?? 1}</span>
                        <button onClick={() => adjust(item.id, 1)} className="flex h-10 w-10 items-center justify-center text-[#202020] hover:bg-[#f7f7f7]" aria-label={"Increase " + item.name}><Plus size={16} /></button>
                      </div>

                      <p className="pt-2 text-right text-[14px] font-medium text-[#171717]">{item.price === 0 ? "Free" : "$" + (item.price * (quantities[item.id] ?? 1)).toFixed(2)}</p>
                    </div>

                    {expandedSupplies.has(item.id) && includedSupplies.length > 0 && (
                      <div className="ml-16 mt-3 space-y-2 border-l border-[#dedede] pl-4">
                        {includedSupplies.map(supply => <p key={supply.id} className="text-[11px] text-[#777]">{supply.name} · {supply.detail}</p>)}
                      </div>
                    )}

                    <div className="mt-5">
                      {!isExpanded ? (
                        addedPrescriptionIds.has(item.id) ? (
                          <div className="ml-16 flex items-center gap-4">
                            <button onClick={() => setExpandedPrescriptionIds(current => new Set([...current, item.id]))} className="text-[12px] font-medium text-[#202020] hover:underline hover:underline-offset-4">
                              Show Details
                            </button>
                            <span className="inline-flex items-center gap-2 rounded-[8px] bg-[#eaf4ed] px-3 py-2 text-[11px] font-semibold text-[#315f49]">
                              <CheckCircle2 size={14} />
                              Prescription complete
                            </span>
                          </div>
                        ) : (
                          <button
                            onClick={() => setExpandedPrescriptionIds(current => new Set([...current, item.id]))}
                            className="ml-16 inline-flex items-center gap-2 rounded-[8px] bg-[#f0f0ee] px-3 py-2 text-[11px] font-semibold text-[#202020] transition-colors hover:bg-[#e5e5e2]"
                          >
                            <Plus size={14} />
                            Add a prescription
                          </button>
                        )
                      ) : addedPrescriptionIds.has(item.id) ? (
                        <div>
                          <div className="ml-16 flex items-center justify-between gap-3">
                            <button onClick={() => setExpandedPrescriptionIds(current => { const next = new Set(current); next.delete(item.id); return next; })} className="text-[12px] font-medium text-[#202020] hover:underline hover:underline-offset-4">Hide Details</button>
                            <button onClick={() => setAddedPrescriptionIds(current => { const next = new Set(current); next.delete(item.id); return next; })} className="inline-flex items-center gap-1.5 pr-3 text-[12px] font-semibold text-[#202020] hover:text-black">
                              <Edit3 size={14} /> Edit
                            </button>
                          </div>
                          <div className="ml-16 mt-3 grid gap-5 rounded-[7px] bg-[#fffaf7] px-5 py-4 md:grid-cols-[2fr_1.8fr_0.42fr_0.58fr]">
                            <div>
                              <p className="text-[10px] font-medium text-[#343434]">Directions of Use</p>
                              <p className="mt-1 text-[11px] leading-[16px] text-[#777]">{details?.directions}</p>
                            </div>
                            <div>
                              <p className="text-[10px] font-medium text-[#343434]">Reason to Compound</p>
                              <p className="mt-1 text-[11px] leading-[16px] text-[#777]">{details?.reason}</p>
                            </div>
                            <div>
                              <p className="text-[10px] font-medium text-[#343434]">Days Supply</p>
                              <p className="mt-1 text-[11px] text-[#777]">{details?.days}</p>
                            </div>
                            <div>
                              <p className="text-[10px] font-medium text-[#343434]">Authorized Refills</p>
                              <p className="mt-1 text-[11px] text-[#777]">{details?.refills}</p>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="rounded-[6px] bg-[#fffdfb] px-6 py-5">
                          <div className="mb-5 flex items-center justify-between gap-3">
                            <h3 className="text-[14px] font-medium text-[#202020]">Prescription for {item.name}</h3>
                            {rowIndex > 0 && <button onClick={() => setExpandedPrescriptionIds(current => { const next = new Set(current); next.delete(item.id); return next; })} className="text-[11px] text-[#777] underline">Hide Details</button>}
                          </div>

                          <div className="grid gap-x-5 gap-y-4 md:grid-cols-[minmax(145px,0.24fr)_minmax(0,1fr)]">
                            <label className="block">
                              <span className="mb-1.5 block text-[11px] font-semibold text-[#303030]">Days Supply <span className="text-[#b44b42]">*</span></span>
                              <input type="number" min="1" placeholder="Enter Days" value={details?.days ?? ""} onChange={event => updatePrescriptionDetail(item.id, "days", event.target.value)} className={"h-[34px] w-full rounded-[10px] border px-3 text-[12px] outline-none " + requiredFieldClass(details?.days)} />
                            </label>

                            <label className="block">
                              <span className="mb-1.5 block text-[11px] font-semibold text-[#303030]">Directions of Use <span className="text-[#b44b42]">*</span></span>
                              <select value={details?.directions ?? ""} onChange={event => updatePrescriptionDetail(item.id, "directions", event.target.value)} className={"h-[34px] w-full rounded-[10px] border px-3 text-[12px] outline-none " + requiredFieldClass(details?.directions)}>
                                <option value="" disabled>Select directions</option>
                                <option>Inject (2.5 mg) subcutaneously once weekly.</option>
                                <option>Inject (5 mg) subcutaneously once weekly.</option>
                                <option>Use as directed by prescriber</option>
                              </select>
                            </label>

                            <label className="block">
                              <span className="mb-1.5 block text-[11px] font-semibold text-[#303030]">Authorized Refills <span className="text-[#b44b42]">*</span></span>
                              <input type="number" min="0" placeholder="Refills" value={details?.refills ?? ""} onChange={event => updatePrescriptionDetail(item.id, "refills", event.target.value)} className={"h-[34px] w-full rounded-[10px] border px-3 text-[12px] outline-none " + requiredFieldClass(details?.refills)} />
                            </label>

                            <label className="block">
                              <span className="mb-1.5 block text-[11px] font-semibold text-[#303030]">Reason to Compound <span className="text-[#b44b42]">*</span></span>
                              <select value={details?.reason ?? ""} onChange={event => updatePrescriptionDetail(item.id, "reason", event.target.value)} className={"h-[34px] w-full rounded-[10px] border px-3 text-[12px] outline-none " + requiredFieldClass(details?.reason)}>
                                <option value="" disabled>Select reason below or type out your own</option>
                                <option>Patient requires a dosage form not commercially available.</option>
                                <option>Patient requires excipient avoidance.</option>
                                <option>Prescriber requested custom strength.</option>
                              </select>
                            </label>
                          </div>

                          <label className="mt-4 block">
                            <span className="mb-1.5 block text-[11px] font-semibold text-[#303030]">Prescription Note (Optional)</span>
                            <textarea placeholder="Enter Prescription Note" className="min-h-[64px] w-full resize-y rounded-[7px] border border-[#dedede] bg-white px-3 py-3 text-[12px] outline-none focus:border-[#183229]" />
                          </label>

                          <div className="mt-4 flex justify-end gap-2">
                            <button
                              onClick={() => setExpandedPrescriptionIds(current => {
                                const next = new Set(current);
                                next.delete(item.id);
                                return next;
                              })}
                              className="h-9 rounded-[7px] border border-[#d3d3d0] bg-white px-4 text-[12px] font-semibold text-[#202020] transition-colors hover:bg-[#f3f3f1]"
                            >
                              Cancel
                            </button>
                            <button
                              onClick={() => {
                                if (!isPrescriptionComplete(item.id)) return;
                                setAddedPrescriptionIds(current => new Set([...current, item.id]));
                                setExpandedPrescriptionIds(current => {
                                  const next = new Set(current);
                                  next.delete(item.id);
                                  const currentIndex = cartRows.findIndex(row => row.item.id === item.id);
                                  const nextPrescription = cartRows[currentIndex + 1];
                                  if (nextPrescription) next.add(nextPrescription.item.id);
                                  return next;
                                });
                              }}
                              disabled={!isPrescriptionComplete(item.id)}
                              className="h-9 min-w-[118px] rounded-[7px] bg-[#111] px-4 text-[12px] font-semibold text-white transition-colors hover:bg-black disabled:cursor-not-allowed disabled:bg-[#dfdfdc] disabled:text-[#92928f]"
                            >
                              {addedPrescriptionIds.has(item.id) ? "Added to order" : "Add to order"}
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </article>

                  {isLastInPharmacy && (
                    <div className="rounded-b-[10px] bg-[#fffaf7] px-5 pb-5 pt-2">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <p className="max-w-[620px] text-[10px] font-medium leading-[16px] text-[#303030]">
                          {multiPatientShipping ? "Multi-patient shipping is supported — one shipping fee covers all patients." : "Multi-patient shipping is not supported — shipping is charged separately for each patient (" + shipmentCount + " shipping fees)."}
                        </p>
                        <div className="flex items-center gap-3">
                          <select value={selectedShipping} onChange={event => setSelectedShippingByPharmacy(current => ({ ...current, [pharmacy]: Number(event.target.value) }))} className="h-8 rounded-[6px] border border-[#dedede] bg-white px-3 text-[10px] outline-none">
                            {cartData.shipping.map((option, index) => <option key={option.label} value={index}>{option.label}</option>)}
                          </select>
                          <span className="text-[12px] font-semibold">{"$" + pharmacyShippingTotal.toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </Fragment>
              );
            })}
          </section>

          <aside className="self-start bg-white xl:sticky xl:top-6">
            <h2 className="text-[28px] font-normal text-[#171717]">Order Total</h2>

            <div className="mt-7">
              <div className="flex items-center justify-between">
                <p className="text-[13px] font-semibold text-[#202020]">Do you have a Voucher Code?</p>
                <ChevronDown size={17} className="rotate-180" />
              </div>
              <div className="mt-3 flex gap-2">
                <input className="h-[31px] min-w-0 flex-1 rounded-[8px] border-0 bg-white px-3 text-[12px] shadow-[inset_0_1px_0_#9E9EA0,inset_-1px_0_0_#9E9EA0,inset_0_-1px_0_#9E9EA0,inset_1px_0_0_#9E9EA0] outline-none focus:shadow-[inset_0_0_0_1px_#183229]" />
                <button className="h-[31px] rounded-full border-0 bg-white px-5 text-[12px] font-medium text-[#666] shadow-[inset_0_1px_0_#9E9EA0,inset_-1px_0_0_#9E9EA0,inset_0_-1px_0_#9E9EA0,inset_1px_0_0_#9E9EA0] transition-colors hover:bg-[#f7f7f7]">Apply</button>
              </div>
            </div>

            <div className="mt-5 space-y-4 text-[13px] text-[#262626]">
              <div className="flex justify-between gap-4"><span>Subtotal</span><span>{"$" + subtotal.toFixed(2)}</span></div>
              <div className="flex justify-between gap-4"><span>Estimated Shipping & Handling</span><span>{"$" + shipping.toFixed(2)}</span></div>
              <div className="flex justify-between gap-4"><span>Estimated Tax</span><span>—</span></div>
              <div className="flex justify-between gap-4 border-y border-[#ececec] py-5 text-[14px] font-semibold"><span>Total</span><span>{"$" + total.toFixed(2)}</span></div>
            </div>

            <p className="mt-4 text-[11px] leading-[18px] text-[#4f4f4f]">Shipping fees are calculated by pharmacy and patient based on the selected method.</p>

            <button onClick={handleCheckout} className="mt-5 h-[52px] w-full rounded-full bg-[#111] text-[13px] font-medium text-white transition-opacity hover:opacity-90">
              Submit for approval
            </button>
          </aside>
        </div>
      </div>
      {previewOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-[#1a1a1a]/35 backdrop-blur-[2px]">
          <button className="absolute inset-0 cursor-default" onClick={() => setPreviewOpen(false)} aria-label="Close preview" />
          <aside className="relative h-full w-full max-w-[460px] overflow-auto border-l border-[#e8e3df] bg-white px-6 py-6">
            <button onClick={() => setPreviewOpen(false)} className="mb-5 flex size-8 items-center justify-center rounded-[7px] text-[#183229] hover:bg-[#f6f4f5]" aria-label="Close preview">
              <XCircle size={18} />
            </button>
            <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#667085]">Preview</p>
            <h2 className="mt-1 text-[22px] font-semibold text-[#1a1a1a]">Patient order</h2>
            <p className="mt-1 text-[12px] text-[#6f7782]">One shipment for {cartData.patients.length} {cartData.patients.length === 1 ? "patient" : "patients"} from {cartData.pharmacy}.</p>

            <section className="mt-6">
              <h3 className="border-b border-[#eee8e3] pb-3 text-[15px] font-semibold text-[#1a1a1a]">Patient information</h3>
              <div className="mt-3 flex flex-col gap-2.5">
                {cartData.patients.map(patient => (
                  <div key={patient.name} className="rounded-[10px] border border-[#dfe5e2] bg-[#f7f9f8] px-4 py-3.5">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-[13px] font-semibold text-[#1a1a1a]">{patient.name}</p>
                        <p className="mt-0.5 text-[10px] text-[#7a837f]">DOB {patient.dob}</p>
                      </div>
                      <span className="rounded-full bg-[#e7efe9] px-2 py-1 text-[9px] font-semibold text-[#315a47]">Patient</span>
                    </div>
                    <div className="mt-3 space-y-2 text-[11px] leading-relaxed text-[#5f6964]">
                      <div className="flex items-center gap-2"><Phone size={13} className="shrink-0 text-[#183229]" /><span>{patient.phone}</span></div>
                      <div className="flex items-start gap-2"><MapPin size={13} className="mt-0.5 shrink-0 text-[#183229]" /><span className="whitespace-pre-line">{patient.address}</span></div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-6">
              <h3 className="border-b border-[#eee8e3] pb-3 text-[15px] font-semibold text-[#1a1a1a]">Prescriptions</h3>
              <div className="mt-4 flex flex-col gap-3">
                {cartRows.map(({ patient, item }) => (
                  <div key={item.id} className="rounded-[10px] border border-[#e8e3df] px-4 py-4">
                    <div className="flex justify-between gap-4">
                      <div className="min-w-0">
                        <p className="text-[13px] font-semibold text-[#1a1a1a]">{item.name}</p>
                        <p className="mt-1 text-[12px] text-[#6f7782]">{item.detail}</p>
                        <p className="mt-1 text-[11px] text-[#8c95a1]">{patient.name}</p>
                      </div>
                      <p className="shrink-0 text-[13px] font-semibold text-[#1a1a1a]">{`$${(item.price * (quantities[item.id] ?? 1)).toFixed(2)}`}</p>
                    </div>
                    <div className="mt-3 grid grid-cols-2 gap-2 text-[11px] text-[#6f7782]">
                      <span>Days Supply: <strong className="text-[#1a1a1a]">1</strong></span>
                      <span>Refills: <strong className="text-[#1a1a1a]">1</strong></span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-6">
              <div className="border-b border-[#eee8e3] pb-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#667085]">Payment</p>
                <p className="mt-1 text-[13px] text-[#1a1a1a]">Select the payment method for the prescription</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <button
                    onClick={() => setPaymentMethod("patient")}
                    className={`inline-flex h-9 items-center gap-2 rounded-full border px-3 text-[12px] font-semibold transition-colors ${
                      paymentMethod === "patient"
                        ? "border-[#17a34a] bg-[#d4f4e3] text-[#183229]"
                        : "border-[#d8dfdc] bg-white text-[#6f7782] hover:border-[#183229]/45"
                    }`}
                  >
                    Pay by Patient <User size={13} />
                  </button>
                  <button
                    onClick={() => setPaymentMethod("clinic")}
                    className={`inline-flex h-9 items-center gap-2 rounded-full border px-3 text-[12px] font-semibold transition-colors ${
                      paymentMethod === "clinic"
                        ? "border-[#17a34a] bg-[#d4f4e3] text-[#183229]"
                        : "border-[#d8dfdc] bg-white text-[#6f7782] hover:border-[#183229]/45"
                    }`}
                  >
                    Pay by Clinic <Building2 size={13} />
                  </button>
                  <button className="inline-flex h-9 items-center gap-1.5 rounded-full border border-dashed border-[#17a34a] bg-white px-3 text-[12px] font-semibold text-[#0a8f3c] transition-colors hover:bg-[#f2f7f4]">
                    <Plus size={13} /> Credit Card
                  </button>
                </div>
              </div>

              <div className="pt-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#667085]">Shipping</p>
                <p className="mt-1 text-[13px] text-[#1a1a1a]">Choose where to ship the prescription</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <button
                    onClick={() => setShipTo("patient")}
                    className={`inline-flex h-9 items-center gap-2 rounded-full border px-3 text-[12px] font-semibold transition-colors ${
                      shipTo === "patient"
                        ? "border-[#17a34a] bg-[#d4f4e3] text-[#183229]"
                        : "border-[#d8dfdc] bg-white text-[#6f7782] hover:border-[#183229]/45"
                    }`}
                  >
                    Ship to Patient <User size={13} />
                  </button>
                  <button
                    onClick={() => setShipTo("clinic")}
                    className={`inline-flex h-9 items-center gap-2 rounded-full border px-3 text-[12px] font-semibold transition-colors ${
                      shipTo === "clinic"
                        ? "border-[#0fbf9f] bg-[#d9fbf4] text-[#183229]"
                        : "border-[#d8dfdc] bg-white text-[#6f7782] hover:border-[#183229]/45"
                    }`}
                  >
                    Ship to Clinic <Building2 size={13} />
                  </button>
                </div>
              </div>
            </section>

            <section className="mt-6">
              <h3 className="border-b border-[#eee8e3] pb-3 text-[15px] font-semibold text-[#1a1a1a]">Summary</h3>
              <div className="mt-4 space-y-3 text-[14px]">
                <div className="flex justify-between text-[#6f7782]"><span>Items subtotal</span><span className="font-semibold text-[#1a1a1a]">${subtotal.toFixed(2)}</span></div>
                <div className="flex justify-between text-[#6f7782]"><span>Shipping</span><span className="font-semibold text-[#1a1a1a]">${shipping.toFixed(2)}</span></div>
                <div className="flex justify-between border-t border-[#eee8e3] pt-4 font-bold text-[#1a1a1a]"><span>Total</span><span className="text-[#183229]">${total.toFixed(2)}</span></div>
              </div>
            </section>

            <div className="sticky bottom-0 -mx-6 mt-8 flex gap-2 border-t border-[#eee8e3] bg-white px-6 py-4">
              <button onClick={() => setPreviewOpen(false)} className="flex h-10 flex-1 items-center justify-center gap-2 rounded-[8px] border border-[#183229] text-[13px] font-semibold text-[#183229]">
                <ChevronLeft size={15} /> Edit cart
              </button>
              <button onClick={() => onNavigate("orders")} className="flex h-10 flex-1 items-center justify-center gap-2 rounded-[8px] bg-[#183229] text-[13px] font-semibold text-white">
                <CheckCircle2 size={15} /> Submit for Approval
              </button>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}

function CheckoutPrescriptionPage({ onNavigate }: { onNavigate: (p: Page) => void }) {
  const [reviewOpen, setReviewOpen] = useState(false);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({ "altin-rx": true });
  const [shippingMethod, setShippingMethod] = useState<"ups" | "fedex">("ups");

  const patient = {
    name: "Altin Selimi",
    dob: "05/01/1986",
    phone: "+1 (646) 389-7766",
    email: "altin.selimi@example.com",
    identification: "NY:23444244343 (State-Issued ID)",
    address: "2823 Middletown Road\nThe Bronx, NY 10461",
  };

  const prescriptions = [
    {
      id: "altin-rx",
      patientName: "Altin Selimi",
      name: "Tirzepatide/Pyridoxine (B6)",
      detail: "20mg/25mg/mL | 1 (0.5mL) Vial",
      price: 125.43,
      qty: 1,
      badge: null,
      details: [
        ["Strength", "20mg/25mg/mL"],
        ["Format", "0.5mL vial"],
        ["Supply", "30 days"],
        ["Directions", "Inject 0.5mL subcutaneously once weekly as directed."],
      ],
      pharmacy: [
        ["Name", "Optimal Balance Pharmacy"],
        ["Phone", "800-518-9831"],
        ["Fax", "800-537-5193"],
        ["Address", "2823 Middletown Road\nThe Bronx, NY 10461"],
      ],
    },
    {
      id: "altin-supply",
      patientName: "Altin Selimi",
      name: "BD 27G X 1/2 Needle Only",
      detail: "1 Needle",
      price: 0,
      qty: 1,
      badge: "Supplies",
      details: [
        ["Format", "Needle"],
        ["Quantity", "1"],
        ["Supply", "Included with prescription"],
        ["Directions", "Use with prescribed injection."],
      ],
      pharmacy: [
        ["Name", "Optimal Balance Pharmacy"],
        ["Phone", "800-518-9831"],
        ["Fax", "800-537-5193"],
        ["Address", "2823 Middletown Road\nThe Bronx, NY 10461"],
      ],
    },
    {
      id: "jane-rx",
      patientName: "Jane Doe",
      name: "Tirzepatide/Pyridoxine (B6)",
      detail: "20mg/25mg/mL | 1 (0.5mL) Vial",
      price: 125.43,
      qty: 1,
      badge: null,
      details: [
        ["Strength", "20mg/25mg/mL"],
        ["Format", "0.5mL vial"],
        ["Supply", "30 days"],
        ["Directions", "Inject 0.5mL subcutaneously once weekly as directed."],
      ],
      pharmacy: [
        ["Name", "Optimal Balance Pharmacy"],
        ["Phone", "800-518-9831"],
        ["Fax", "800-537-5193"],
        ["Address", "2823 Middletown Road\nThe Bronx, NY 10461"],
      ],
    },
    {
      id: "jane-supply",
      patientName: "Jane Doe",
      name: "BD 27G X 1/2 Needle Only",
      detail: "1 Needle",
      price: 0,
      qty: 1,
      badge: "Supplies",
      details: [
        ["Format", "Needle"],
        ["Quantity", "1"],
        ["Supply", "Included with prescription"],
        ["Directions", "Use with prescribed injection."],
      ],
      pharmacy: [
        ["Name", "Optimal Balance Pharmacy"],
        ["Phone", "800-518-9831"],
        ["Fax", "800-537-5193"],
        ["Address", "2823 Middletown Road\nThe Bronx, NY 10461"],
      ],
    },
  ];

  const subtotal = prescriptions.reduce((sum, rx) => sum + rx.price * rx.qty, 0);
  const shipping = shippingMethod === "ups" ? 35 : 35;
  const total = subtotal + shipping;

  function ProductThumb({ badge }: { badge: string | null }) {
    if (badge) {
      return (
        <div className="flex size-11 items-center justify-center rounded-[8px] border border-[#eee] bg-[#f6f4f5]">
          <Syringe size={16} className="text-[#183229]" />
        </div>
      );
    }
    return (
      <div className="flex size-11 items-center justify-center overflow-hidden rounded-[8px] border border-[#eee] bg-gradient-to-b from-[#f7efe9] to-[#ece5b6]/45">
        <img src={imgPT141} alt="" className="h-12 w-12 object-contain mix-blend-multiply" />
      </div>
    );
  }

  function PrescriptionCard({ rx }: { rx: (typeof prescriptions)[number] }) {
    const isOpen = expanded[rx.id] ?? false;
    return (
      <article className="rounded-[10px] border border-[#e8e3df] bg-white p-4 shadow-sm transition-colors hover:bg-[#fffbf8]">
        <div className="flex items-start justify-between gap-4">
          <div className="flex min-w-0 gap-3">
            <ProductThumb badge={rx.badge} />
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-[14px] font-semibold leading-snug text-[#1a1a1a]">{rx.name}</h3>
                {rx.badge && <span className="rounded-[5px] bg-[#eef0f2] px-2 py-0.5 text-[10px] font-semibold text-[#667085]">{rx.badge}</span>}
              </div>
              <p className="mt-1 text-[12px] text-[#6f7782]">{rx.detail}</p>
              <p className="mt-1 text-[11px] font-medium text-[#8c95a1]">For {rx.patientName}</p>
            </div>
          </div>
          <div className="flex shrink-0 items-center gap-2 text-[#183229]">
            <button className="flex size-8 items-center justify-center rounded-[7px] hover:bg-[#f2f7f4]" aria-label="Edit prescription"><Edit3 size={15} /></button>
            <button className="flex size-8 items-center justify-center rounded-[7px] hover:bg-[#f2f7f4]" aria-label="Remove prescription"><XCircle size={16} /></button>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-2 text-[14px] text-[#1a1a1a]">
          <span className="font-bold">{rx.price === 0 ? "Free" : `$${rx.price.toFixed(2)}`}</span>
          <span>x</span>
          <div className="inline-flex h-8 items-center overflow-hidden rounded-[8px] bg-[#eef0f2]">
            <button className="flex h-8 w-8 items-center justify-center text-[#183229]"><Minus size={13} /></button>
            <span className="flex h-8 min-w-8 items-center justify-center text-[13px] font-semibold">{rx.qty}</span>
            <button className="flex h-8 w-8 items-center justify-center text-[#183229]"><Plus size={13} /></button>
          </div>
        </div>

        <div className="mt-4 border-t border-[#eee8e3] pt-3">
          <button onClick={() => setExpanded((prev) => ({ ...prev, [rx.id]: !isOpen }))} className="flex items-center gap-1.5 text-[12px] font-semibold text-[#1a1a1a]">
            <ChevronDown size={14} className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
            {isOpen ? "Hide details" : "Show details"}
          </button>
          {isOpen && (
            <div className="mt-3 grid gap-4 border-t border-[#f1ede9] pt-3 md:grid-cols-2">
              <div className="grid grid-cols-[92px_minmax(0,1fr)] gap-y-2 text-[12px]">
                {rx.details.map(([label, value]) => <div key={label} className="contents"><span className="font-semibold text-[#6f7782]">{label}</span><span className="text-[#1a1a1a]">{value}</span></div>)}
              </div>
              <div className="grid grid-cols-[92px_minmax(0,1fr)] gap-y-2 text-[12px]">
                {rx.pharmacy.map(([label, value]) => <div key={label} className="contents"><span className="font-semibold text-[#6f7782]">{label}</span><span className="whitespace-pre-line text-[#1a1a1a]">{value}</span></div>)}
              </div>
            </div>
          )}
        </div>
      </article>
    );
  }

  return (
    <div className="-m-8 min-h-screen bg-[#fffbf8] px-6 py-8">
      <button onClick={() => onNavigate("cart-multi")} className="fixed left-[calc(16rem+6px)] top-20 z-10 flex h-9 w-7 items-center justify-center rounded-r-[8px] bg-[#f7efe9] text-[#183229] shadow-sm" aria-label="Back to cart">
        <ChevronLeft size={18} />
      </button>

      <div className="mx-auto max-w-[940px]">
        <h1 className="text-[30px] font-semibold tracking-[-0.01em] text-[#1a1a1a]">New Prescription Order</h1>

        <section className="mt-10">
          <h2 className="border-b border-[#e8e3df] pb-2 text-[16px] font-semibold text-[#1a1a1a]">Patient</h2>
          <div className="mt-4 grid gap-5 rounded-[12px] border border-[#e8e3df] bg-white p-5 shadow-sm md:grid-cols-2">
            <div className="grid grid-cols-[104px_minmax(0,1fr)] gap-y-2 text-[13px]">
              <span className="font-semibold text-[#1a1a1a]">Name</span><span className="text-[#6f7782]">{patient.name}</span>
              <span className="font-semibold text-[#1a1a1a]">DoB</span><span className="text-[#6f7782]">{patient.dob}</span>
              <span className="font-semibold text-[#1a1a1a]">Phone</span><span className="text-[#6f7782]">{patient.phone}</span>
              <span className="font-semibold text-[#1a1a1a]">Email</span><span className="text-[#6f7782] underline">{patient.email}</span>
              <span className="font-semibold text-[#1a1a1a]">Identification</span><span className="text-[#6f7782]">{patient.identification}</span>
            </div>
            <div className="grid grid-cols-[104px_minmax(0,1fr)] gap-y-2 self-start text-[13px]">
              <span className="font-semibold text-[#1a1a1a]">Address</span>
              <span className="whitespace-pre-line text-[#6f7782]">{patient.address}</span>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="border-b border-[#e8e3df] pb-2 text-[16px] font-semibold text-[#1a1a1a]">Prescriptions</h2>
          <div className="mt-4 flex flex-col gap-3">
            {prescriptions.map((rx) => <PrescriptionCard key={rx.id} rx={rx} />)}
          </div>
          <button className="mt-4 flex h-10 items-center gap-2 rounded-[8px] border border-[#183229] bg-white px-4 text-[13px] font-semibold text-[#183229] transition-colors hover:bg-[#f2f7f4]">
            <Plus size={16} /> Add another prescription
          </button>
        </section>

        <section className="mt-8 pb-20">
          <h2 className="border-b border-[#e8e3df] pb-2 text-[16px] font-semibold text-[#1a1a1a]">Shipping</h2>
          <div className="mt-4 rounded-[12px] border border-[#e8e3df] bg-white p-5 shadow-sm">
            <p className="text-[13px] font-semibold text-[#1a1a1a]">Shipping method</p>
            <p className="mt-1 max-w-[760px] text-[12px] leading-relaxed text-[#6f7782]">Shipping time covers transit only. Pharmacy processing may take up to 3-5 business days, and pharmacies do not ship on weekends.</p>
            <div className="mt-4 flex flex-col gap-3">
              {[
                { id: "ups" as const, price: "$35.00", label: "UPS Next Day Air (Priority)" },
                { id: "fedex" as const, price: "$35.00", label: "FedEx Standard Overnight" },
              ].map((option) => (
                <button key={option.id} onClick={() => setShippingMethod(option.id)} className={`flex min-h-14 items-center gap-4 rounded-[9px] border px-4 text-left transition-colors ${shippingMethod === option.id ? "border-[#183229] bg-[#f2f7f4]" : "border-[#d8dfdc] bg-white hover:border-[#183229]/40"}`}>
                  <span className={`flex size-6 items-center justify-center rounded-full border ${shippingMethod === option.id ? "border-[#183229]" : "border-[#8c95a1]"}`}>{shippingMethod === option.id && <span className="size-3 rounded-full bg-[#183229]" />}</span>
                  <span className="text-[14px] font-bold text-[#1a1a1a]">{option.price}</span>
                  <span className="text-[14px] font-semibold text-[#1a1a1a]">{option.label}</span>
                </button>
              ))}
            </div>

            <label className="mt-5 flex flex-col gap-1">
              <span className="text-[13px] font-semibold text-[#1a1a1a]">Ship to</span>
              <button className="flex h-11 items-center justify-between rounded-[8px] border border-[#d8dfdc] px-3 text-left text-[13px] text-[#1a1a1a]">
                ScriptLinkRx Demo - 2823 Middletown Road
                <ChevronDown size={15} className="text-[#6f7782]" />
              </button>
            </label>

            <div className="mt-6 flex justify-end gap-3">
              <button onClick={() => onNavigate("cart-multi")} className="h-10 rounded-[8px] border border-[#d8dfdc] bg-white px-4 text-[13px] font-semibold text-[#183229] transition-colors hover:bg-[#f2f7f4]">Cancel</button>
              <button onClick={() => setReviewOpen(true)} className="h-10 rounded-[8px] bg-[#183229] px-5 text-[13px] font-semibold text-white transition-colors hover:bg-[#244438]">Review order</button>
            </div>
          </div>
        </section>
      </div>

      {reviewOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-[#1a1a1a]/35 backdrop-blur-[2px]">
          <button className="absolute inset-0 cursor-default" onClick={() => setReviewOpen(false)} aria-label="Close review" />
          <aside className="relative h-full w-full max-w-[430px] overflow-auto border-l border-[#e8e3df] bg-white px-6 py-6 shadow-2xl">
            <button onClick={() => setReviewOpen(false)} className="mb-6 flex size-8 items-center justify-center rounded-[7px] text-[#183229] hover:bg-[#f6f4f5]" aria-label="Close review"><XCircle size={18} /></button>
            <h2 className="text-[22px] font-semibold text-[#1a1a1a]">Review order</h2>

            <section className="mt-7">
              <h3 className="border-b border-[#eee8e3] pb-3 text-[15px] font-semibold text-[#1a1a1a]">Order for</h3>
              <div className="mt-4 rounded-[10px] border border-[#e8e3df] bg-[#fffbf8] px-4 py-3">
                <p className="text-[13px] font-semibold text-[#1a1a1a]">{patient.name}</p>
                <p className="mt-1 whitespace-pre-line text-[12px] text-[#6f7782]">{patient.address}</p>
              </div>
            </section>

            <section className="mt-6">
              <h3 className="border-b border-[#eee8e3] pb-3 text-[15px] font-semibold text-[#1a1a1a]">Shipping to</h3>
              <div className="mt-4 rounded-[10px] border border-[#e8e3df] px-4 py-3">
                <p className="text-[13px] font-semibold text-[#1a1a1a]">ScriptLinkRx Demo</p>
                <p className="mt-1 text-[12px] leading-relaxed text-[#6f7782]">2823 Middletown Road<br />The Bronx, NY 10461</p>
              </div>
            </section>

            <section className="mt-6">
              <h3 className="border-b border-[#eee8e3] pb-3 text-[15px] font-semibold text-[#1a1a1a]">Prescriptions</h3>
              <div className="mt-4 flex flex-col gap-3">
                {prescriptions.map((rx) => (
                  <div key={rx.id} className="rounded-[10px] border border-[#e8e3df] px-4 py-4">
                    <div className="flex justify-between gap-4">
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <p className="text-[13px] font-semibold text-[#1a1a1a]">{rx.name}</p>
                          {rx.badge && <span className="rounded-[5px] bg-[#eef0f2] px-1.5 py-0.5 text-[9px] font-semibold text-[#667085]">{rx.badge}</span>}
                        </div>
                        <p className="mt-1 text-[12px] text-[#6f7782]">{rx.detail}</p>
                        <p className="mt-1 text-[11px] text-[#8c95a1]">{rx.patientName}</p>
                      </div>
                      <p className="text-[13px] font-semibold text-[#1a1a1a]">{rx.price === 0 ? "Free" : `$${(rx.price * rx.qty).toFixed(2)}`}</p>
                    </div>
                    <div className="mt-3 inline-flex h-8 items-center overflow-hidden rounded-[8px] bg-[#eef0f2]">
                      <button className="flex h-8 w-8 items-center justify-center text-[#183229]"><Minus size={13} /></button>
                      <span className="flex h-8 min-w-8 items-center justify-center text-[13px] font-semibold">{rx.qty}</span>
                      <button className="flex h-8 w-8 items-center justify-center text-[#183229]"><Plus size={13} /></button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-6">
              <h3 className="border-b border-[#eee8e3] pb-3 text-[15px] font-semibold text-[#1a1a1a]">Summary</h3>
              <div className="mt-4 space-y-3 text-[14px]">
                <div className="flex justify-between text-[#6f7782]"><span>Subtotal</span><span className="font-semibold text-[#1a1a1a]">${subtotal.toFixed(2)}</span></div>
                <div className="flex justify-between text-[#6f7782]"><span>Shipping</span><span className="font-semibold text-[#1a1a1a]">${shipping.toFixed(2)}</span></div>
                <div className="flex justify-between border-t border-[#eee8e3] pt-4 font-bold text-[#1a1a1a]"><span>Total</span><span className="text-[#183229]">${total.toFixed(2)}</span></div>
              </div>
            </section>

            <div className="sticky bottom-0 -mx-6 mt-8 flex gap-2 border-t border-[#eee8e3] bg-white px-6 py-4">
              <button onClick={() => setReviewOpen(false)} className="flex h-10 flex-1 items-center justify-center gap-2 rounded-[8px] border border-[#183229] text-[13px] font-semibold text-[#183229]"><ChevronLeft size={15} /> Edit order</button>
              <button onClick={() => onNavigate("orders")} className="flex h-10 flex-1 items-center justify-center gap-2 rounded-[8px] bg-[#183229] text-[13px] font-semibold text-white"><CheckCircle2 size={15} /> Submit and pay</button>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}

function LoginPage({ onLogin }: { onLogin: () => void }) {
  function submitLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onLogin();
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-white font-['Inter',sans-serif] text-[#1a1a1a]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(circle_at_50%_0%,rgba(197,216,83,0.28),rgba(217,251,244,0.26)_32%,rgba(255,255,255,0)_72%)]" />
      <div className="relative mx-auto flex min-h-screen w-full max-w-[620px] flex-col items-center px-6 pt-7">
        <div className="flex items-center gap-2.5">
          <img src={scriptlinkrxLogo} alt="ScriptLinkRx" className="h-[30px] w-9 object-contain" />
          <span className="font-['Poppins',sans-serif] text-[18px] font-semibold uppercase tracking-wide text-[#183229]">
            S<span className="lowercase">CRIPTLINKrx</span>
          </span>
        </div>

        <section className="mt-[110px] w-full max-w-[430px] text-center">
          <h1 className="font-['Georgia',serif] text-[48px] font-semibold leading-none tracking-[-0.02em] text-[#1a1a1a]">
            Welcome back
          </h1>
          <p className="mt-5 text-[15px] text-[#1a1a1a]">Let’s get you logged in.</p>

          <form onSubmit={submitLogin} className="mt-12">
            <input
              type="email"
              defaultValue="demo@scriptlinkrx.com"
              className="h-[52px] w-full rounded-[8px] border border-[#1a1a1a] bg-white px-4 text-[13px] font-medium text-[#1a1a1a] outline-none placeholder:text-[#6f7782] focus:border-[#183229]"
              placeholder="Email"
            />
            <button type="submit" className="mt-3 flex h-[46px] w-full items-center justify-center rounded-[999px] bg-[#1a1a1a] text-[13px] font-semibold text-white transition-colors hover:bg-[#183229]">
              Continue to log in
            </button>
          </form>

          <div className="my-8 grid grid-cols-[1fr_auto_1fr] items-center gap-3">
            <span className="h-px bg-[#1a1a1a]/45" />
            <span className="text-[12px] text-[#6f7782]">Or other log-in options</span>
            <span className="h-px bg-[#1a1a1a]/45" />
          </div>

          <button
            onClick={onLogin}
            className="flex h-[48px] w-full items-center justify-center gap-5 rounded-[999px] border border-[#cfd6d2] bg-white text-[14px] font-semibold text-[#1a1a1a] transition-colors hover:border-[#183229]/50 hover:bg-[#fbfaf8]"
          >
            <span className="text-[22px] font-bold leading-none text-[#4285f4]">G</span>
            Sign in with Google
          </button>

          <button type="button" className="mt-8 text-[12px] font-semibold text-[#1a1a1a] underline underline-offset-4 hover:text-[#183229]">
            Forgot password?
          </button>
        </section>
      </div>
    </main>
  );
}

// ─── App Shell ────────────────────────────────────────────────────────────────

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => window.localStorage.getItem("scriptlinkrx-authenticated") === "true");
  const [page, setPage] = useState<Page>(DEFAULT_PAGE);
  const [cartMode, setCartMode] = useState<CartMode>("single");
  const [multiCartPatientIds, setMultiCartPatientIds] = useState<number[]>([]);
  const [patientCartEntries, setPatientCartEntries] = useState<PatientCartEntry[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<CardDef>(POPULAR_CARDS[0]);
  const [selectedOrder, setSelectedOrder] = useState<typeof ORDERS[number]>(ORDERS[0]);
  const [favoriteProductIds, setFavoriteProductIds] = useState<Set<number>>(
    () => new Set([...POPULAR_CARDS, ...ALL_CARDS].filter((card) => card.heartVariant === "green").map((card) => card.id)),
  );
  const favoriteProducts = useMemo(
    () => [...POPULAR_CARDS, ...ALL_CARDS].filter((card) => favoriteProductIds.has(card.id)),
    [favoriteProductIds],
  );
  const cartPage: Page = "cart-multi";
  const [cartPreviewItems, setCartPreviewItems] = useState<CartPreviewItem[]>([]);
  const [appLoading, setAppLoading] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMenuOpen, setChatMenuOpen] = useState(false);
  const [chatMuted, setChatMuted] = useState(false);
  const [showChatTutorial, setShowChatTutorial] = useState(
    () => window.localStorage.getItem("scriptlinkrx-chat-tutorial-seen") !== "true",
  );
  const [showPlatformTour, setShowPlatformTour] = useState(false);
  const [platformTourStep, setPlatformTourStep] = useState(0);
  const [platformTourTooltipVisible, setPlatformTourTooltipVisible] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [alexTyping, setAlexTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const [chatMessages, setChatMessages] = useState<Array<{ id: number; sender: "alex" | "user"; text: string }>>([
    { id: 1, sender: "alex", text: "Hi! I’m Alex. How can I help with your pharmacy or product order today?" },
  ]);

  useEffect(() => {
    window.localStorage.setItem("scriptlinkrx-authenticated", String(isAuthenticated));
  }, [isAuthenticated]);

  useEffect(() => {
    if (!chatOpen) return;
    window.requestAnimationFrame(() => {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
    });
  }, [chatMessages, alexTyping, chatOpen]);

  function getAlexReply(message: string) {
    const question = message.toLowerCase().replace(/[^a-z0-9\s-]/g, " ");
    const includesAny = (...terms: string[]) => terms.some((term) => question.includes(term));

    if (includesAny("thank", "thanks", "thx")) {
      return "You’re welcome! If you need anything else, I can help with products, patients, prescriptions, shipping, or order tracking.";
    }
    if (includesAny("hello", "hi ", "hey", "good morning", "good afternoon") || question.trim() === "hi") {
      return "Hi! How can I help?";
    }
    if (includesAny("multi shipping", "multi shiping", "multiple shipping", "multiple shiping", "multi-shipping", "multiple patient", "multi patient")) {
      if (includesAny("where", "find", "which pharmacy", "which pharmacies")) {
        return "Open Catalog and check the pharmacy options beside the search bar. Pharmacies that support it have a green “Multi-shipping” badge. Hover over the badge for details; pharmacies without the badge charge shipping per patient.";
      }
      return "Multi-shipping lets one supported pharmacy ship prescriptions for several patients with one shipping fee for that pharmacy cart. Look for the green Multi-shipping badge in Catalog.";
    }
    if (includesAny("where to find product", "where to find a product", "where can i find product", "where can i find a product", "how can i find product", "find a product", "find product", "search product", "look for product")) {
      return "Open Catalog from the left menu, then use the search field near the top. You can search by product name and use the pharmacy filter to narrow the results.";
    }
    if (includesAny("how to order", "how do i order", "how can i order", "place an order", "order a product", "buy a product", "how to buy")) {
      return "Open Catalog → choose a product → select its size, strength, and pharmacy → choose one or more patients → select Add to cart. In Cart, complete each prescription, choose shipping, then continue to checkout.";
    }
    if (includesAny("best product", "best products", "which product", "recommend product", "recommendation")) {
      return "There isn’t one best product for every patient. The right option depends on the treatment goal, medical history, and prescriber’s decision. You can browse Catalog and compare formulations and pharmacies, but confirm the clinical choice with the prescriber.";
    }
    if (includesAny("shipping", "delivery", "arrive", "how long")) {
      return "Delivery depends on the pharmacy and shipping method you select. Most orders are processed within one business day, then arrive in about 1–3 business days. Your cart shows the exact method and fee before checkout.";
    }
    if (includesAny("tracking", "track", "where is my order", "order status")) {
      return "Open Orders and select the order to see its live status and tracking. If it says “Tracking Not Ready,” the pharmacy hasn’t created the shipping label yet.";
    }
    if (includesAny("semaglutide", "tirzepatide", "pt-141", "bremelanotide", "available", "availability", "injectable")) {
      return "Availability can vary by product strength, size, and pharmacy. Open the product in Catalog, choose its options, and the available pharmacy choices and prices will update there.";
    }
    if (includesAny("price", "cost", "how much", "cheapest")) {
      return "The price changes with the product configuration and pharmacy. Choose the size and strength on the product page to compare options; the cart will show the final product price plus shipping.";
    }
    if (includesAny("prescription", "prescriber", "open rx", " rx ", "doctor")) {
      return "Prescription details are completed for each patient in the cart. The assigned prescriber and prescription status are also shown in Order Details after the order is created.";
    }
    if (includesAny("patient", "address", "add person")) {
      return "Choose a patient on the product page, or create a new one from the patient menu. You can add several patients, set a quantity for each, and review every patient’s address in the cart.";
    }
    if (includesAny("cancel", "refund", "return")) {
      return "Open the order in Orders and use Request Cancellation. If the pharmacy has already started processing it, create a support ticket so the team can review the available options.";
    }
    if (includesAny("support", "human", "agent", "ticket", "someone")) {
      return "You can open Support Tickets from the left menu. You can also use the three-dot menu here and choose Support tickets to contact the team.";
    }
    if (includesAny("pharmacy", "pharmacies")) {
      return "Catalog lets you filter across all six pharmacies. Each product page shows available pharmacy prices, and pharmacies that combine shipping for multiple patients have a Multi-shipping badge.";
    }
    if (includesAny("cart", "checkout", "add to cart")) {
      return "After choosing a pharmacy and at least one patient, add the product to the cart. Items are grouped by pharmacy, with each patient’s quantity, price, prescription fields, address, and shipping option shown together.";
    }

    return "I’m not completely sure what you mean yet. Could you tell me whether this is about a product, patient, prescription, pharmacy, shipping, or an existing order?";
  }

  function sendChatMessage(event: FormEvent) {
    event.preventDefault();
    const message = chatInput.trim();
    if (!message) return;
    setChatMessages(current => [...current, { id: Date.now(), sender: "user", text: message }]);
    setChatInput("");
    setAlexTyping(true);
    window.setTimeout(() => {
      setChatMessages(current => [...current, {
        id: Date.now() + 1,
        sender: "alex",
        text: getAlexReply(message),
      }]);
      setAlexTyping(false);
    }, 900);
  }

  function dismissChatTutorial() {
    setShowChatTutorial(false);
    window.localStorage.setItem("scriptlinkrx-chat-tutorial-seen", "true");
  }

  function startChatWelcome() {
    setChatMessages([]);
    setChatOpen(true);
    setAlexTyping(true);
    window.setTimeout(() => {
      setChatMessages(current => [...current, { id: Date.now(), sender: "alex", text: "Hi! I’m Alex. How can I help with your pharmacy or product order today?" }]);
      setAlexTyping(false);
    }, 1100);
  }

  function finishPlatformTour() {
    window.localStorage.setItem("scriptlinkrx-platform-tour-seen", "true");
    setShowPlatformTour(false);
    setPlatformTourTooltipVisible(false);
    setPlatformTourStep(0);
    startChatWelcome();
  }

  const cartItemCount = cartPreviewItems.reduce((count, item) => count + (item.qty ?? 1), 0);

  function addCartItems(count = 1, product?: CartPreviewItem) {
    if (product) {
      setCartPreviewItems((current) => {
        const existingIndex = current.findIndex((item) => item.id === product.id);
        if (existingIndex === -1) {
          return [{ ...product, qty: product.qty ?? count }, ...current].slice(0, 4);
        }
        const next = [...current];
        const existing = next[existingIndex];
        next.splice(existingIndex, 1);
        return [{ ...existing, ...product, qty: (existing.qty ?? 1) + (product.qty ?? count) }, ...next].slice(0, 4);
      });
    }
  }

  function updateCartItemQty(id: number, delta: number) {
    setCartPreviewItems((current) =>
      current
        .map((item) => item.id === id ? { ...item, qty: Math.max(0, (item.qty ?? 1) + delta) } : item)
        .filter((item) => (item.qty ?? 1) > 0),
    );
  }

  function removeCartItem(id: number) {
    setCartPreviewItems((current) => current.filter((item) => item.id !== id));
  }

  function clearCartItems() {
    setCartPreviewItems([]);
    setPatientCartEntries([]);
    setMultiCartPatientIds([]);
  }

  function addToPatientCart(entries: PatientCartEntry[]) {
    setPatientCartEntries(current => [...current, ...entries]);
    setMultiCartPatientIds(current => [...new Set([...current, ...entries.map(entry => entry.patientId)])]);
  }

  function runWithAppLoader(action: () => void, delayMs = 500) {
    if (appLoading) return;
    setAppLoading(true);
    window.setTimeout(() => {
      action();
      setAppLoading(false);
    }, delayMs);
  }

  function renderPage() {
    switch (page) {
      case "dashboard":
        return <DashboardPage onNavigate={setPage} />;
      case "products":
        return (
          <ProductsPage
            onNavigate={setPage}
            cartMode={cartMode}
            setCartMode={setCartMode}
            onProductSelect={setSelectedProduct}
          />
        );
      case "favorites":
        return <FavoritesPage onNavigate={setPage} cartPage={cartPage} onProductSelect={setSelectedProduct} />;
      case "product-detail":
        return <ProductDetailPage onNavigate={setPage} cartMode={cartMode} setCartMode={setCartMode} onAddToPatientCart={addToPatientCart} product={selectedProduct} />;
      case "pharmacies":
        return <PharmaciesPage onNavigate={setPage} />;
      case "orders":
        return <OrdersPage onNavigate={setPage} onOrderSelect={(order) => { setSelectedOrder(order); setPage("order-detail"); }} />;
      case "order-detail":
        return <OrderDetailPage order={selectedOrder} onNavigate={setPage} />;
      case "support":
        return <SupportPage onNavigate={setPage} />;
      case "users":
        return <UsersPage onNavigate={setPage} />;
      case "settings":
        return <SettingsPage onNavigate={setPage} />;
      case "cart-single":
        return <MultiPatientCartPage onNavigate={setPage} cartMode={cartMode} setCartMode={setCartMode} selectedPatientIds={multiCartPatientIds} cartEntries={patientCartEntries} />;
      case "cart-multi":
        return <MultiPatientCartPage onNavigate={setPage} cartMode={cartMode} setCartMode={setCartMode} selectedPatientIds={multiCartPatientIds} cartEntries={patientCartEntries} />;
      case "checkout-prescription":
        return <CheckoutPrescriptionPage onNavigate={setPage} />;
      default:
        return (
          <ProductsPage
            onNavigate={setPage}
            cartMode={cartMode}
            setCartMode={setCartMode}
            onProductSelect={setSelectedProduct}
          />
        );
    }
  }

  if (!isAuthenticated) {
    return <LoginPage onLogin={() => {
      setIsAuthenticated(true);
      setPlatformTourStep(0);
      setPage("products");
      setShowPlatformTour(true);
      setPlatformTourTooltipVisible(true);
    }} />;
  }

  const platformTourSteps = [
    {
      icon: <BookOpen size={23} />,
      title: "Catalog",
      description: "Browse and search all available products, then compare configurations, pharmacy prices, and availability.",
      hint: "This is where every new product order begins.",
      card: "left-[260px] top-[145px]",
      arrow: "-left-2 top-7",
    },
    {
      icon: <ClipboardList size={23} />,
      title: "Orders",
      description: "Review submitted orders and follow approval, payment, pharmacy processing, tracking, and delivery.",
      hint: "Open an order to see its full details and patient tracking link.",
      card: "left-[260px] top-[182px]",
      arrow: "-left-2 top-7",
    },
    {
      icon: <ShoppingCart size={23} />,
      title: "Cart",
      description: "Review products by patient and pharmacy, complete prescription fields, and choose shipping before checkout.",
      hint: "Continue becomes available when all required information is complete.",
      card: "left-[260px] top-[219px]",
      arrow: "-left-2 top-7",
    },
    {
      icon: <Truck size={23} />,
      title: "Multi-shipping pharmacies",
      description: "In Catalog, supported pharmacies display a green Multi-shipping badge in the pharmacy filter row.",
      hint: "It means one shipping fee can cover prescriptions for multiple patients from that pharmacy.",
      card: "left-[310px] top-[245px]",
      arrow: "left-10 -top-2",
    },
  ];
  const activeTourStep = platformTourSteps[platformTourStep];

  return (
    <AppLoadingContext.Provider value={{ runWithAppLoader }}>
      <CartSummaryContext.Provider value={{ cartItemCount, cartPreviewItems, addCartItems, updateCartItemQty, removeCartItem, clearCartItems }}>
        <ProductFavoritesContext.Provider value={{ favoriteProductIds, setFavoriteProductIds, favoriteProducts }}>
          <div className="flex h-screen overflow-hidden bg-[#fffbf8] font-['Inter',sans-serif]">
            {/* Sidebar Navigation */}
            <Sidebar active={page} onNavigate={setPage} cartPage={cartPage} onLogout={() => setIsAuthenticated(false)} />

            {/* Main content area */}
            <main className="h-screen min-w-0 flex-1 overflow-y-auto p-6">
              <div className="bg-card rounded-[10px] min-h-full p-7 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
                {renderPage()}
              </div>
            </main>

            {showPlatformTour && platformTourTooltipVisible && (
                <div className={`chat-welcome-in fixed z-[82] w-[330px] rounded-[18px] bg-[#171717] p-5 text-white shadow-[0_22px_65px_rgba(0,0,0,0.32)] ${activeTourStep.card}`}>
                  <span className={`absolute size-4 rotate-45 bg-[#171717] ${activeTourStep.arrow}`} aria-hidden="true" />
                  <div className="relative flex items-center justify-between">
                    <div className="flex size-10 items-center justify-center rounded-[12px] bg-[#dff2a8] text-[#064b2f]">{activeTourStep.icon}</div>
                    <button onClick={finishPlatformTour} className="rounded-full px-2.5 py-1.5 text-[11px] text-white/55 hover:bg-white/10 hover:text-white">End tips</button>
                  </div>
                  <p className="relative mt-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#b9d879]">Quick tip</p>
                  <h2 className="relative mt-1.5 text-[18px] font-semibold leading-[24px]">{activeTourStep.title}</h2>
                  <p className="relative mt-2 text-[12px] leading-[18px] text-white/70">{activeTourStep.description}</p>
                  <div className="relative mt-4 rounded-[11px] bg-white/[0.08] px-3 py-2.5 text-[11px] leading-[16px] text-white/65">{activeTourStep.hint}</div>
                  <div className="relative mt-5 flex items-center gap-2">
                    <div className="flex flex-1 gap-1.5">{platformTourSteps.map((_, index) => <span key={index} className={`h-1.5 rounded-full transition-all ${index === platformTourStep ? "w-6 bg-[#d8ffa2]" : index < platformTourStep ? "w-2.5 bg-white/40" : "w-2.5 bg-white/20"}`} />)}</div>
                    <button onClick={() => {
                      if (platformTourStep === platformTourSteps.length - 1) finishPlatformTour();
                      else setPlatformTourStep(step => step + 1);
                    }} className="h-9 rounded-[9px] bg-[#d8ffa2] px-4 text-[11px] font-semibold text-[#123422] hover:bg-[#c9ef96]">{platformTourStep === platformTourSteps.length - 1 ? "Finish" : "Next"}</button>
                  </div>
                </div>
            )}

            {/* Chat popup */}
            {chatOpen && (
              <div className="chat-welcome-in fixed bottom-[76px] right-5 z-50 flex h-[430px] w-[385px] flex-col overflow-hidden rounded-[21px] bg-white shadow-[0_20px_55px_rgba(5,60,35,0.24)]">
                <div className="flex h-[101px] items-center bg-[#004b2d] px-[35px] pb-[15px] pt-[14px] text-white">
                  <div className="flex size-[34px] items-center justify-center overflow-hidden rounded-full bg-[#f0b33a] text-[18px]">👨🏾</div>
                  <div className="ml-[11px]">
                    <p className="text-[14px] font-medium leading-tight">Alex Rivera</p>
                    <p className="mt-[2px] text-[12px] leading-tight text-white/70">Online</p>
                  </div>
                  <button onClick={() => setChatMenuOpen(current => !current)} className="ml-auto flex size-8 items-center justify-center text-[24px] leading-none text-white" aria-expanded={chatMenuOpen} aria-label="Chat options">⋮</button>
                </div>
                {chatMenuOpen && (
                  <div className="absolute right-4 top-[62px] z-20 w-[205px] overflow-hidden rounded-[10px] border border-[#dfe5e2] bg-white p-1.5 shadow-[0_12px_32px_rgba(0,0,0,0.18)]">
                    <button onClick={() => { setChatMuted(current => !current); setChatMenuOpen(false); }} className="flex h-9 w-full items-center gap-2 rounded-[7px] px-2.5 text-left text-[11px] font-medium text-[#1a1a1a] hover:bg-[#f3f6f4]"><Bell size={14} /> {chatMuted ? "Unmute notifications" : "Mute notifications"}</button>
                    <button onClick={() => { setChatMessages([{ id: Date.now(), sender: "alex", text: "Hi! I’m Alex. How can I help with your pharmacy or product order today?" }]); setChatInput(""); setAlexTyping(false); setChatMenuOpen(false); }} className="flex h-9 w-full items-center gap-2 rounded-[7px] px-2.5 text-left text-[11px] font-medium text-[#1a1a1a] hover:bg-[#f3f6f4]"><RefreshCw size={14} /> New conversation</button>
                    <button onClick={() => { setPage("support"); setChatOpen(false); setChatMenuOpen(false); }} className="flex h-9 w-full items-center gap-2 rounded-[7px] px-2.5 text-left text-[11px] font-medium text-[#1a1a1a] hover:bg-[#f3f6f4]"><MessageSquare size={14} /> Support tickets</button>
                    <div className="my-1 h-px bg-[#e8ece9]" />
                    <button onClick={() => { setChatOpen(false); setChatMenuOpen(false); }} className="flex h-9 w-full items-center gap-2 rounded-[7px] px-2.5 text-left text-[11px] font-medium text-[#1a1a1a] hover:bg-[#f3f6f4]"><X size={14} /> Close chat</button>
                  </div>
                )}
                <div className="relative -mt-[15px] flex min-h-0 flex-1 flex-col rounded-t-[21px] bg-white">
                  <div className="flex-1 space-y-4 overflow-y-auto px-[19px] pb-4 pt-[31px]">
                    {chatMessages.map(message => message.sender === "alex" ? (
                      <div key={message.id} className="flex items-start gap-[12px]">
                        <div className="flex size-[23px] shrink-0 items-center justify-center rounded-full bg-[#f0b33a] text-[11px]">👨🏾</div>
                        <div className="w-fit max-w-[278px] rounded-[20px] bg-[#eaf2bd] px-[15px] py-[13px] text-[13px] leading-[16px] text-[#111]">{message.text}</div>
                      </div>
                    ) : (
                      <div key={message.id} className="ml-auto w-fit max-w-[275px] rounded-[20px] bg-black px-[15px] py-[13px] text-[13px] leading-[16px] text-white">{message.text}</div>
                    ))}
                    {alexTyping && <div className="flex items-center gap-[12px]"><div className="flex size-[23px] shrink-0 items-center justify-center rounded-full bg-[#f0b33a] text-[11px]">👨🏾</div><div className="flex gap-1 rounded-[16px] bg-[#eaf2bd] px-4 py-3"><span className="size-1.5 animate-pulse rounded-full bg-[#60712d]" /><span className="size-1.5 animate-pulse rounded-full bg-[#60712d] [animation-delay:150ms]" /><span className="size-1.5 animate-pulse rounded-full bg-[#60712d] [animation-delay:300ms]" /></div></div>}
                    <div ref={chatEndRef} aria-hidden="true" />
                  </div>
                  <form onSubmit={sendChatMessage} className="flex items-center gap-2 border-t border-[#e9ecea] bg-white px-4 py-3">
                    <input value={chatInput} onChange={event => setChatInput(event.target.value)} placeholder="Write a message..." className="h-10 min-w-0 flex-1 rounded-full border border-[#dce2df] bg-[#f7f9f8] px-4 text-[12px] outline-none placeholder:text-[#929b96] focus:border-[#004b2d]" />
                    <button type="submit" disabled={!chatInput.trim()} className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#004b2d] text-white transition-colors hover:bg-[#063c27] disabled:cursor-not-allowed disabled:bg-[#b8c4be]" aria-label="Send message"><ArrowUpRight size={16} /></button>
                  </form>
                </div>
              </div>
            )}

            {/* Chat bubble */}
            <div className="fixed bottom-5 right-5 z-50">
              {showChatTutorial && !chatOpen && (
                <div className="chat-welcome-in absolute bottom-[60px] right-0 w-[310px] rounded-[18px] bg-[#171717] p-4 text-white shadow-[0_18px_50px_rgba(0,0,0,0.28)]">
                  <span className="absolute -bottom-2 right-[14px] size-4 rotate-45 bg-[#171717]" aria-hidden="true" />
                  <div className="relative flex items-start justify-between gap-3">
                    <div>
                      <p className="text-[14px] font-semibold">Meet Alex, your assistant</p>
                      <p className="mt-1 text-[11px] leading-[16px] text-white/65">Ask questions and get help while you work.</p>
                    </div>
                    <button onClick={dismissChatTutorial} className="flex size-7 shrink-0 items-center justify-center rounded-full text-white/65 hover:bg-white/10 hover:text-white" aria-label="Dismiss chat tutorial"><X size={14} /></button>
                  </div>
                  <div className="relative mt-3 rounded-[13px] bg-[#eaf2bd] p-3 text-[#142218]">
                    <div className="flex items-center gap-2 text-[11px] font-semibold"><MessageSquare size={13} /> Ask Alex about:</div>
                    <p className="mt-2 text-[11px] leading-[16px] text-[#435047]">Finding products, placing orders, multi-shipping, prescriptions, delivery, and tracking.</p>
                  </div>
                  <button onClick={() => { dismissChatTutorial(); setChatOpen(true); }} className="relative mt-3 h-10 w-full rounded-[10px] bg-[#2f2f2f] text-[12px] font-semibold text-white transition-colors hover:bg-[#3a3a3a]">Try the chat</button>
                </div>
              )}
              <button onClick={() => {
                if (chatOpen) setChatOpen(false);
                else { dismissChatTutorial(); setChatOpen(true); }
              }} className="w-11 h-11 bg-[#053c23] rounded-full flex items-center justify-center shadow-lg hover:bg-[#183229] transition-colors" aria-expanded={chatOpen} aria-label={chatOpen ? "Close chat" : "Open chat"}>
                <MessageSquare size={16} className="text-[#d8ffa2]" />
              </button>
            </div>
          </div>
          <AppActionOverlay active={appLoading} />
        </ProductFavoritesContext.Provider>
      </CartSummaryContext.Provider>
    </AppLoadingContext.Provider>
  );
}
