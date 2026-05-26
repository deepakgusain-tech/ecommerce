'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Package,
  Truck,
  CheckCircle,
  Clock,
  User,
  Mail,
  Phone,
  MapPin,
  DollarSign,
  Download,
  MoreVertical,
  ChevronRight,
} from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const OrderDetailPage = () => {
  const orderId = 'ORD-012345'
  const orderData = {
    id: orderId,
    status: 'shipped',
    date: '2026-05-20',
    customer: {
      name: 'Jane Doe',
      email: 'jane.doe@example.com',
      phone: '+1 (555) 123-4567',
      address: '123 Main St, Anytown, NY 12345',
    },
    items: [
      {
        id: 1,
        name: 'Premium Wireless Headphones',
        sku: 'SKU-001',
        price: 79.99,
        quantity: 2,
        total: 159.98,
      },
      {
        id: 2,
        name: 'USB-C Cable (3-pack)',
        sku: 'SKU-002',
        price: 19.99,
        quantity: 1,
        total: 19.99,
      },
    ],
    subtotal: 179.97,
    shipping: 15.0,
    tax: 15.67,
    total: 210.64,
    tracking: 'TRK-123456789',
    shippingMethod: 'Express (2-3 days)',
  }

  const timeline = [
    {
      id: 1,
      status: 'Order placed',
      timestamp: '2026-05-20 10:30 AM',
      icon: Package,
      completed: true,
    },
    {
      id: 2,
      status: 'Payment confirmed',
      timestamp: '2026-05-20 10:35 AM',
      icon: DollarSign,
      completed: true,
    },
    {
      id: 3,
      status: 'Preparing to ship',
      timestamp: '2026-05-20 2:15 PM',
      icon: Clock,
      completed: true,
    },
    {
      id: 4,
      status: 'Shipped',
      timestamp: '2026-05-21 9:00 AM',
      icon: Truck,
      completed: true,
    },
    {
      id: 5,
      status: 'Out for delivery',
      timestamp: 'Expected 2026-05-23',
      icon: Truck,
      completed: false,
    },
    {
      id: 6,
      status: 'Delivered',
      timestamp: 'Pending',
      icon: CheckCircle,
      completed: false,
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'shipped':
        return 'bg-blue-500/10 text-blue-700 border-blue-200'
      case 'delivered':
        return 'bg-green-500/10 text-green-700 border-green-200'
      case 'pending':
        return 'bg-yellow-500/10 text-yellow-700 border-yellow-200'
      case 'cancelled':
        return 'bg-red-500/10 text-red-700 border-red-200'
      default:
        return 'bg-gray-500/10 text-gray-700 border-gray-200'
    }
  }

  return (
    <div className="min-h-screen bg-background px-4 pb-10 pt-6 sm:px-6 lg:px-8">
      <div className="mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight">Order {orderId}</h1>
            <p className="mt-1 text-sm text-muted-foreground">Placed on {orderData.date}</p>
          </div>
          <div className="flex items-center gap-2">
            <Badge className={`${getStatusColor(orderData.status)} border`}>
              {orderData.status.charAt(0).toUpperCase() + orderData.status.slice(1)}
            </Badge>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <MoreVertical className="size-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Edit order</DropdownMenuItem>
                <DropdownMenuItem>Send invoice</DropdownMenuItem>
                <DropdownMenuItem>View receipt</DropdownMenuItem>
                <DropdownMenuItem className="text-destructive">Cancel order</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card className="rounded-xl border border-border/40 bg-gradient-to-br from-white/40 to-white/10">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Order Total</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-semibold">${orderData.total.toFixed(2)}</p>
              <p className="text-xs text-muted-foreground mt-1">{orderData.items.length} items</p>
            </CardContent>
          </Card>

          <Card className="rounded-xl border border-border/40 bg-gradient-to-br from-blue-50/20 to-blue-50/10">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Status</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-semibold capitalize">{orderData.status}</p>
              <p className="text-xs text-muted-foreground mt-1">Last updated today</p>
            </CardContent>
          </Card>

          <Card className="rounded-xl border border-border/40 bg-gradient-to-br from-green-50/20 to-green-50/10">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Tracking</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-semibold font-mono">{orderData.tracking}</p>
              <Button variant="link" size="sm" className="mt-1 h-auto p-0">
                Track shipment <ChevronRight className="size-3 ml-1" />
              </Button>
            </CardContent>
          </Card>

          <Card className="rounded-xl border border-border/40 bg-gradient-to-br from-purple-50/20 to-purple-50/10">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Shipping</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm font-semibold">{orderData.shippingMethod}</p>
              <p className="text-xs text-muted-foreground mt-1">Arriving May 23</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Order Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Order Items */}
            <Card className="rounded-2xl border border-border/40 shadow-sm">
              <CardHeader className="border-b border-border/40">
                <CardTitle>Order Items</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border/40 bg-muted/30">
                        <th className="px-6 py-3 text-left font-semibold">Product</th>
                        <th className="px-6 py-3 text-right font-semibold">Price</th>
                        <th className="px-6 py-3 text-right font-semibold">Qty</th>
                        <th className="px-6 py-3 text-right font-semibold">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orderData.items.map((item) => (
                        <tr key={item.id} className="border-b border-border/40 hover:bg-muted/30 transition-colors">
                          <td className="px-6 py-4">
                            <div>
                              <p className="font-medium">{item.name}</p>
                              <p className="text-xs text-muted-foreground">{item.sku}</p>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-right">${item.price.toFixed(2)}</td>
                          <td className="px-6 py-4 text-right">{item.quantity}</td>
                          <td className="px-6 py-4 text-right font-semibold">${item.total.toFixed(2)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Order Summary */}
                <div className="px-6 py-4 border-t border-border/40 space-y-2">
                  <div className="flex justify-end gap-4">
                    <div className="w-48">
                      <div className="flex justify-between py-2 text-sm">
                        <span>Subtotal</span>
                        <span>${orderData.subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between py-2 text-sm">
                        <span>Shipping</span>
                        <span>${orderData.shipping.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between py-2 text-sm">
                        <span>Tax</span>
                        <span>${orderData.tax.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between py-3 text-lg font-semibold border-t border-border/40 pt-2">
                        <span>Total</span>
                        <span>${orderData.total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Timeline */}
            <Card className="rounded-2xl border border-border/40 shadow-sm">
              <CardHeader className="border-b border-border/40">
                <CardTitle>Order Timeline</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {timeline.map((event, index) => {
                    const IconComponent = event.icon
                    return (
                      <div key={event.id} className="flex gap-4">
                        <div className="relative flex flex-col items-center">
                          <div
                            className={`rounded-full p-2 ${
                              event.completed
                                ? 'bg-emerald-500/10 text-emerald-600'
                                : 'bg-muted text-muted-foreground'
                            }`}
                          >
                            <IconComponent className="size-4" />
                          </div>
                          {index !== timeline.length - 1 && (
                            <div
                              className={`w-0.5 h-12 mt-2 ${
                                event.completed ? 'bg-emerald-500/30' : 'bg-muted'
                              }`}
                            />
                          )}
                        </div>
                        <div className="flex-1 pt-1">
                          <p className={`font-medium ${event.completed ? 'text-foreground' : 'text-muted-foreground'}`}>
                            {event.status}
                          </p>
                          <p className="text-sm text-muted-foreground">{event.timestamp}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Customer Info */}
            <Card className="rounded-2xl border border-border/40 shadow-sm">
              <CardHeader className="border-b border-border/40">
                <CardTitle className="flex items-center gap-2">
                  <User className="size-4" />
                  Customer
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 pt-6">
                <div>
                  <p className="text-sm text-muted-foreground">Name</p>
                  <p className="font-medium">{orderData.customer.name}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium text-sm break-all">{orderData.customer.email}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium">{orderData.customer.phone}</p>
                </div>
                <Button variant="outline" className="w-full">
                  View customer profile
                </Button>
              </CardContent>
            </Card>

            {/* Shipping Address */}
            <Card className="rounded-2xl border border-border/40 shadow-sm">
              <CardHeader className="border-b border-border/40">
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="size-4" />
                  Shipping Address
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-sm leading-relaxed">{orderData.customer.address}</p>
                <Button variant="outline" className="w-full mt-4">
                  Edit address
                </Button>
              </CardContent>
            </Card>

            {/* Actions */}
            <div className="space-y-2">
              <Button variant="outline" className="w-full" size="sm">
                <Download className="size-4 mr-2" />
                Download invoice
              </Button>
              <Button variant="outline" className="w-full" size="sm">
                Resend confirmation
              </Button>
              <Button variant="outline" className="w-full" size="sm">
                Print order
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderDetailPage